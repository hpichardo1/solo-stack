import React from 'react'
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

export default NavBar