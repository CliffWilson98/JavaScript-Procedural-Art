import React from 'react';

class ProfilePage extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <React.Fragment>
            <h1> this is the profile page </h1>
            <h2>You are logged in as : PLACEHOLDER</h2>
        </React.Fragment>
    );
  }
}

export default ProfilePage;