import React from 'react'
import { connect } from 'react-redux'
import LogIn from './LogIn'
import ChatApp from './ChatApp'
import { auth } from './firebase'
import { useAuthState }  from 'react-firebase-hooks/auth'

const NavBar = () =>{
  const [ user ] = useAuthState(auth)

  return (
    <nav id='navbar'>
      { user ? <ChatApp/> : <LogIn /> }
    </nav>
  )
}
const mapState = (state) =>{
  return {
  
  }
}
const mapDispatch = (dispatch) =>{
  return {
    
  }
}

export default connect(mapState, mapDispatch)(NavBar)