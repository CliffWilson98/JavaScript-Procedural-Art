import React from 'react';
import TestComp from './components/TestComp.js'

class App extends React.Component{

  state = {
    test: ":this is a test of the state:",
  }

  constructor(props){
    super(props);
    this.clickAmount = 0;
    this.colors = ["#FF0000", "#11FFFF", "#4F8888"]
  }

  buttonFunction(){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    console.log(this.colors[1]);
    ctx.fillStyle = this.getFillStyle();
    ctx.fillRect(0, 0, 400, 400);
    console.log(canvas.getContext('2d'))
    this.setState({
      test: this.getRandomNumber()
    });
    this.clickAmount++;
  }

  getFillStyle(){
    return this.colors[this.clickAmount % 3];
  }

  getRandomNumber(){
    return Math.random() * 100
  }

  render(){
    return (
      <React.Fragment>
        <h1> Image Generator Prototype </h1>
        <canvas ref='canvas' width={400} height={400}></canvas>
        <h1>hi {this.state.test}</h1>
        <button onClick={this.buttonFunction.bind(this)}>Click Me</button>
        <TestComp/>
      </React.Fragment>
    );
  }
}

export default App;