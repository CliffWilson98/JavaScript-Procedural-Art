import React from 'react';
import NavBar from './components/NavBar.js'
import Browser from './Browser.js'

class ProfilePage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        'user': '',
        'userArt': []
    }

    this.getUserArt = this.getUserArt.bind(this);
  }

  //TODO should maybe add another request to check the validity of the user
  componentDidMount(){
      let userName = localStorage.getItem('user');
      if (userName != null){
        this.setState({'user': userName});
      }
      else{
        this.setState({'user': "You are not properly logged in. Please visit the sign in page or create an account"});
      }

      this.getUserArt();
  }

  getUserArt(){

    fetch(`https://secure-temple-85751.herokuapp.com/queryArt/?user=${localStorage.getItem('user')}`)
    .then(response => {
      console.log(response)
      return response.json();
    }).then(data => {
      this.setState({'userArt': data})
      console.log(data)
    })

  }

  render(){
    return (
        <React.Fragment>
            <NavBar/>
            <div style={{'text-align': 'center'}}>
              <h1> Browse your art </h1>
              <h2>username: {this.state.user}</h2>
              <Browser art={this.state.userArt}/>
            </div>
        </React.Fragment>
    );
  }
}

export default ProfilePage;