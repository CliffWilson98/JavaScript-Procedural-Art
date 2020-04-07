import React from 'react';
import ModuleAdder from './components/ModuleAdder.js'
import ModuleViewer from './components/ModuleViewer.js'

class App extends React.Component{

  constructor(props){
    super(props);
    this.clickAmount = 0;
    this.colors = ["#FF0000", "#11FFFF", "#4F8888"]
    this.state = {
      activeModules: ['point', 'circle', 'test']
    }

    this.addModule = this.addModule.bind(this)
    this.clearModules = this.clearModules.bind(this)
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

  addModule(moduleName){
    this.setState(prevState => ({
        activeModules: [...prevState.activeModules, moduleName]
      }))
  }

  clearModules(){
    this.setState(prevState => ({
        activeModules: []
      }))
  }

  logModules(){
    console.log(this.state.activeModules);
  }

  getFillStyle(){
    return this.colors[this.clickAmount % 3];
  }

  render(){
    return (
      <React.Fragment>
        <h1> Image Generator Prototype </h1>
        <canvas ref='canvas' width={400} height={400}></canvas>
        <button onClick={this.buttonFunction.bind(this)}>Change canvas color</button>
        <button onClick={this.clearModules.bind(this)}>Remove every module</button>
        <button onClick={this.logModules.bind(this)}>Click To Log Modules</button>
        <hr></hr>
        <ModuleAdder buttonFunction={this.addModule}/>
        <hr></hr>
        <ModuleViewer modules={this.state.activeModules}/>
      </React.Fragment>
    );
  }
}

export default App;