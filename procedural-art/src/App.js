import React from 'react';
import ArtGenerator from './ArtGenerator.js'
import Signup from './Signup.js'

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
      </Router>
    );
  }
}

export default App;