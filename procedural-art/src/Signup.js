import React from 'react';

class Signup extends React.Component{

  render(){
    return (
        <React.Fragment>
            <h1> this is the sign up page </h1>
            <label for="fname">UserName</label>
            <input type="text" id="fname" name="fname"></input><br></br>
            <label for="fname">Password</label>
            <input type="text" id="fname" name="fname"></input>
        </React.Fragment>
    );
  }
}

export default Signup;