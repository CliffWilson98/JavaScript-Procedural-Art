import React from 'react';
import ArtGenerator from './ArtGenerator.js'
import Signup from './Signup.js'
import Login from './Login.js'
import ProfilePage from './ProfilePage.js'
import Browser from './Browser.js'

import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
  Redirect
} from "react-router-dom"

class App extends React.Component{

  render(){
    return (
      <Router>
        <Route exact path="/" component={ArtGenerator}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/browse" component={Browser}/>
      </Router>
    );
  }
}

export default App;