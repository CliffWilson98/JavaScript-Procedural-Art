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
    return (
        <React.Fragment>
            <NavBar/>
            <div style={{'text-align': 'center'}}>
              <Browser art={this.state.art}/>
            </div>
        </React.Fragment>
    );
  }
}

export default BrowseArtPage;