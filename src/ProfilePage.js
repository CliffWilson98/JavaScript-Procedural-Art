import React from 'react';

class ProfilePage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        'user': ''
    }
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
  }

  render(){
    return (
        <React.Fragment>
            <h1> this is the profile page </h1>
            <h2>username: {this.state.user}</h2>
        </React.Fragment>
    );
  }
}

export default ProfilePage;