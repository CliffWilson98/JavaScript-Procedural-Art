import React from 'react';
import ModuleAdder from './components/ModuleAdder.js'
import ModuleViewer from './components/ModuleViewer.js'
import Module from './components/Module.js'

class App extends React.Component{

  constructor(props){
    super(props);
    this.clickAmount = 0;
    this.colors = ["#FF0000", "#11FFFF", "#4F8888"]
    this.state = {
      activeModules: ['hello', 'world']
    }
  }

  buttonFunction(){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    console.log(this.colors[1]);
    ctx.fillStyle = this.getFillStyle();
    ctx.fillRect(0, 0, 400, 400);
    console.log(canvas.getContext('2d'))
    this.clickAmount++;
  }

  addModule(){
    this.setState(prevState => ({
        activeModules: [...prevState.activeModules, "test"]
      }))
  }

  getFillStyle(){
    return this.colors[this.clickAmount % 3];
  }

  render(){
    return (
      <React.Fragment>
        <h1> Image Generator Prototype </h1>
        <canvas ref='canvas' width={400} height={400}></canvas>
        <button onClick={this.buttonFunction.bind(this)}>I change the canvas</button>
        <button onClick={this.addModule.bind(this)}>I add a module</button>
        <hr></hr>
        <ModuleAdder/>
        <hr></hr>
        <ModuleViewer modules={this.state.activeModules}/>
      </React.Fragment>
    );
  }
}

export default App;