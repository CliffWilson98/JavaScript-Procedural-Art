import React from 'react';
import ModuleAdder from './components/ModuleAdder.js'
import ModuleViewer from './components/ModuleViewer.js'

//TODO MAJOR BUG: whenever deleting a module, all modules that come after it are 
//reset to their default values. This is because Javascript re creates the object when it is put into a new index.
class App extends React.Component{

  constructor(props){
    super(props);
    this.id = 0;
    this.state = {
      activeModules: []
    }

    this.testArray = []

    this.addModule = this.addModule.bind(this)
    this.clearModules = this.clearModules.bind(this)
    this.removeModule = this.removeModule.bind(this)
    this.testingArrayOfComponents = this.testingArrayOfComponents.bind(this)
    this.processModules = this.processModules.bind(this);
  }

  buttonFunction(){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#ABABAB"
    ctx.fillRect(0, 0, 400, 400);
  }

  addModule(moduleType){
    this.setState(prevState => ({
        activeModules: [...prevState.activeModules, {key: this.id, type: moduleType}]
      }))
      this.id++;
  }

  testingArrayOfComponents(comp){
    console.log(comp.state)
  }

  removeModule(key){
    let modules = this.state.activeModules
    for (let i = 0; i < modules.length; i ++){
      if (modules[i].key == key){
        modules.splice(i, 1)
      }
    }
    console.log("about to set state, this is what the new module is ")
    console.log(modules);
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

  processModules(){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#ABABAB"
    ctx.fillRect(0, 0, 400, 400);

    let modules = this.state.activeModules; 
    modules[1].module.process(modules[0].module.process(), ctx);
    // for (let i =0; i < modules.length; i ++){
    //   modules[i].module.process();
    // }
  }

  render(){
    return (
      <React.Fragment>
        <h1> Image Generator Prototype </h1>
        <canvas ref='canvas' width={400} height={400}></canvas>
        <button onClick={this.buttonFunction.bind(this)}>Change canvas color</button>
        <button onClick={this.clearModules.bind(this)}>Remove every module</button>
        <button onClick={this.logModules.bind(this)}>Click To Log Modules</button>
        <button onClick={this.processModules}>Process Every Active Module</button>
        <hr></hr>
        <ModuleAdder buttonFunction={this.addModule}/>
        <hr></hr>
        <ModuleViewer modules={this.state.activeModules} removeFunction={this.removeModule}/>
      </React.Fragment>
    );
  }
}

export default App;