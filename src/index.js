import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import NavBar from './NavBar'
import store from '../store/store'

class Main extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div id='main'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={NavBar}/> 
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default Main

render(
  //redux store goes in Provider, when ready
<Provider store={store} >
  <Main />
</Provider>
, document.querySelector("#root"));