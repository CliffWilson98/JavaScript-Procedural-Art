import React from 'react';
import NavBar from './components/NavBar.js';

class Login extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      'user': '',
      'pass': '',
      'message': '',
      'signupUser:': '',
      'signupPass': ''
    }

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event){
    this.setState({[event.target.id]: event.target.value})
  }

  //TODO add check for duplicate usernames
  signup(){
    fetch(`https://secure-temple-85751.herokuapp.com/insertUser/?user=${this.state.signupUser}&pass=${this.state.signupPass}`)
  }

  async login(){
    let userName = this.state.user;
    let password = this.state.pass;

    const fetchPromise = fetch(`https://secure-temple-85751.herokuapp.com/getUser/?user=${userName}&pass=${password}`)
    fetchPromise.then(response => {
        return response.json();
    }).then(data => {
        if (data.length == 0){
            this.setState({'message': "No Account Found"});
        }
        else{
            localStorage.setItem('user', userName);
            localStorage.setItem('pass', password);
            window.location.href="/profile"
        }
    })
  }

  render(){
    return (
        <React.Fragment>
            <NavBar/>
            <div class="text-center">
              <h1> Login to your account</h1>
              <label for="fname">UserName</label>
              <input type="text" id="user" name="user" value={this.user} onChange={this.updateState}></input><br></br>
              <label for="fname">Password</label>
              <input type="text" id="pass" name="pass" value={this.password} onChange={this.updateState}></input>
              <button onClick={this.login}>Login</button>
              <h2>{this.state.message}</h2>
              <hr></hr>
              <h1> Create an account </h1>
              <label for="fname">UserName</label>
              <input type="text" id="signupUser" value={this.state.signupUser} onChange={this.updateState}></input><br></br>
              <label for="fname">Password</label>
              <input type="text" id="signupPass" value={this.state.signupPass} onChange={this.updateState}></input>
              <button onClick={this.signup}>Submit</button>
            </div>
        </React.Fragment>
    );
  }
}

export default Login;