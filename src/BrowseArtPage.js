import React from 'react';
import Browser from './Browser.js'
import NavBar from './components/NavBar.js'

class BrowseArtPage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      'art': []
    }

  }

  componentDidMount(){
    const uploadedArt = fetch('https://secure-temple-85751.herokuapp.com/getArt')
    .then(response => {
        return response.json();
    })
    .then(data => {
        this.setState({art: data})
    })
  }

  render(){
    if (this.state.art.length != 0){
      return (
          <React.Fragment>
              <NavBar/>
              <div style={{'text-align': 'center'}}>
                <Browser art={this.state.art}/>
              </div>
          </React.Fragment>
      );
    }
    else{
      return (
          <React.Fragment>
              <NavBar/>
              <div style={{'text-align': 'center'}}>
                <h2>Loading images...</h2>
              </div>
          </React.Fragment>
      );
      
    }
  }
}

export default BrowseArtPage;