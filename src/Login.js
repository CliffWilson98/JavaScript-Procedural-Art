import React from 'react';

class Login extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      'user': '',
      'pass': '',
      'message': ''
    }

    this.login = this.login.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event){
    this.setState({[event.target.name]: event.target.value})
  }

  async login(){
    console.log("going to log in");
    const fetchPromise = fetch(`http://localhost:7000/getUser/?user=${this.state.user}&pass=${this.state.pass}`)
    fetchPromise.then(response => {
        return response.json();
    }).then(data => {
        if (data.length == 0){
            this.setState({'message': "No Account Found"});
        }
        else{
            window.location.href="/"
        }
        console.log(data.length)
    })
  }

  render(){
    return (
        <React.Fragment>
            <h1> Login to your account!</h1>
            <label for="fname">UserName</label>
            <input type="text" id="fname" name="user" value={this.user} onChange={this.updateState}></input><br></br>
            <label for="fname">Password</label>
            <input type="text" id="fname" name="pass" value={this.password} onChange={this.updateState}></input>
            <button onClick={this.login}>Login</button>
            <h2>{this.state.message}</h2>
        </React.Fragment>
    );
  }
}

export default Login;