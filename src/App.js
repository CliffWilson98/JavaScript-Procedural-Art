import React from 'react';
import ArtGenerator from './ArtGenerator.js'
import Login from './Login.js'
import ProfilePage from './ProfilePage.js'
import BrowseArtPage from './BrowseArtPage.js'

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
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/browse" component={BrowseArtPage}/>
      </Router>
    );
  }
}

export default App;