import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LogOut from './LogOut'
import firebase from 'firebase'
import { _verifyUser, _createUser } from '../store/store'

const ChatApp = (props)=>{
  const user = firebase.auth().currentUser
  const { currentUser, createUser, verifyUser} = props

  const initialGoogleUserId = () =>{ return ''}
  const initialGoogleEmail = () => { return ''}

  const [ googleUserId, setGoogleUserId ] = useState(()=> initialGoogleUserId())
  const [ googleEmail, setGoogleEmail ] = useState( ()=> initialGoogleEmail())

  useEffect(()=>{
    setGoogleUserId(user.uid)
    setGoogleEmail(user.email)
  }, [])
  useEffect(()=>{
    if (googleUserId.length > 1){
      verifyUser(googleUserId, googleEmail)

      if (currentUser.uid !== googleUserId){
        console.log('DID NOT EQUALLLL')
        console.log('CURRENT USERRR--->', currentUser)
        console.log('CURRENT USER ID-->', currentUser.uid)
        console.log('CURRENT GOOGLE ID-->', googleUserId)
        createUser({googleUserId, googleEmail})
      } 
    }
  },[googleUserId])

  console.log('GOOGLE UID--->', googleUserId)
  console.log('GOOGLE EMAIL--->', googleEmail)
  console.log('CURRENT USER--->', currentUser)
  return (
    <div>
      <LogOut />
      ChatApp
     
    </div>
  )
}
const mapState = (state) =>{
  return {
    currentUser: state.currentUser
  }
}
const mapDispatch = (dispatch) =>{
  return {
    createUser: (userData) =>{ dispatch( _createUser(userData) )},
    verifyUser: (uid, email) => { dispatch( _verifyUser(uid, email) )}
  }
}

export default connect(mapState, mapDispatch)(ChatApp)