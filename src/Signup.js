import React from 'react';

class Signup extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      'user': '',
      'pass': ''
    }

    this.signup = this.signup.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event){
    this.setState({[event.target.name]: event.target.value})
  }

  signup(){
    fetch(`https://secure-temple-85751.herokuapp.com/insertUser/?user=${this.state.user}&pass=${this.state.pass}`)
  }

  render(){
    return (
        <React.Fragment>
            <h1> this is the sign up page </h1>
            <label for="fname">UserName</label>
            <input type="text" id="fname" name="user" value={this.user} onChange={this.updateState}></input><br></br>
            <label for="fname">Password</label>
            <input type="text" id="fname" name="pass" value={this.password} onChange={this.updateState}></input>
            <button onClick={this.signup}>Submit</button>
        </React.Fragment>
    );
  }
}

export default Signup;