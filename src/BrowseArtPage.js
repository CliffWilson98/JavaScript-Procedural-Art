import React from 'react';
import Browser from './Browser.js'
import NavBar from './components/NavBar.js'

class BrowseArtPage extends React.Component{

  render(){
    return (
        <React.Fragment>
            <NavBar/>
            <hr></hr>
            <Browser/>
        </React.Fragment>
    );
  }
}

export default BrowseArtPage;