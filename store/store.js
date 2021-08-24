import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'

//action types
const VERIFY_USER = 'VERIFY_USER' 
const CREATE_USER = 'CREATE_USER'


//action creators
const verifiedUser = (uid, email) =>{
  return {
    type: VERIFY_USER,
    uid, 
    email
  }
}
const createdUser = (id, email) => {
  return {
    type: CREATE_USER,
    id,
    email,
  }
}

//thunks
export const _createUser = (userData) =>{
  return async (dispatch) =>{
    await axios.post(`/api/createuser`, userData)
    const { googleUserId, googleEmail } = userData
    dispatch( createdUser(googleUserId, googleEmail) )
  }
}

export const _verifyUser = (id, email) =>{
  return async (dispatch) =>{
    const user = (await axios.get(`/api/verifyuser/${id}`)).data
    console.log('API USER THUNK--->', user)
    const uid = user[0].uid
    const email = user[0].username
    dispatch( verifiedUser(uid, email))
  }
}

//initial state
const initialState = {
 currentUser: {},
 newUser: []
}

//reducer
const reducer = (state = initialState, action) =>{
  switch(action.type){
    case VERIFY_USER:
      return {...state, currentUser: { uid: action.uid, email: action.email }}
    case CREATE_USER:
      return {...state, newUser: [...state.newUser, action.email]}
    default:
      return state
  }
  
}

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store