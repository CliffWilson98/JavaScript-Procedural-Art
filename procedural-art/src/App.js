import React from 'react';
import ModuleAdder from './components/ModuleAdder.js'
import ModuleViewer from './components/ModuleViewer.js'

class App extends React.Component{

  //TODO need to give each added element a key this is important for deletion
  constructor(props){
    super(props);
    this.id = 0;
    this.state = {
      activeModules: []
    }

    this.addModule = this.addModule.bind(this)
    this.clearModules = this.clearModules.bind(this)
    this.removeModule = this.removeModule.bind(this)
  }


  buttonFunction(){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#ABABAB"
    ctx.fillRect(0, 0, 400, 400);
  }

  addModule(moduleName){
    this.setState(prevState => ({
        activeModules: [...prevState.activeModules, {key: this.id, name: moduleName}]
      }))
      this.id++;
  }

  removeModule(key){
    console.log("inside remove module")
    console.log(this)
    let modules = this.state.activeModules
    for (let i = 0; i < modules.length; i ++){
      if (modules[i].key == key){
        modules.splice(i, 1)
      }
    }
    this.setState(() => ({
        activeModules: modules
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

  render(){
    return (
      <React.Fragment>
        <h1> Image Generator Prototype </h1>
        <canvas ref='canvas' width={400} height={400}></canvas>
        <button onClick={this.buttonFunction.bind(this)}>Change canvas color</button>
        <button onClick={this.clearModules.bind(this)}>Remove every module</button>
        <button onClick={this.logModules.bind(this)}>Click To Log Modules</button>
        <button onClick={() => this.removeModule(1)}>testing new function</button>
        <hr></hr>
        <ModuleAdder buttonFunction={this.addModule}/>
        <hr></hr>
        <ModuleViewer modules={this.state.activeModules} removeFunction={this.removeModule}/>
      </React.Fragment>
    );
  }
}

export default App;