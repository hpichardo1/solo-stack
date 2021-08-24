import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import NavBar from './NavBar'

class Main extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div id='main'>
        <NavBar/>
      </div>
    )
  }
}


export default Main

render(
  //redux store goes in Provider, when ready
//<Provider >
  <Main />
//</Provider>
, document.querySelector("#root"));