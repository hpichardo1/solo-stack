import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import NavBar from './src/NavBar'

class Main extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div id='main'>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            
          </Switch>
        </BrowserRouter>
      
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