import React, { useReducer } from 'react';
import ModuleAdder from './components/ModuleAdder.js'
import ModuleViewer from './components/ModuleViewer.js'

//TODO MAJOR BUG: whenever deleting a module, all modules that come after it are 
//reset to their default values. This is because Javascript re creates the object when it is put into a new index.
class ArtGenerator extends React.Component{

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
    this.uploadImage = this.uploadImage.bind(this);
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
    console.log(modules)
    let output = null;

    if(modules.length != 0){
      let output = modules[0].module.process()

      for (let i=1; i < modules.length; i ++){
        output = modules[i].module.process(output);
      }

      console.log(output);
      //TODO need to add a check for if this is valid image data or not
      ctx.putImageData(output, 0, 0);
    }
  }

  //TODO do something with having to check for a username
  uploadImage(){
    console.log("uploading image");
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');

    let data = canvas.toDataURL('image/png');
    let userName = localStorage.getItem('user');

    const Data = {
      name: 'another name',
      imageData: data
    }

    const Options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    }

    // fetch(`http://localhost:7000/uploadArt/`, Options);
    fetch('https://secure-temple-85751.herokuapp.com/uploadArt', Options)
    
  }

  //TODO change canvas size back to 400x400
  render(){
    return (
      <React.Fragment>
        <h1> Image Generator Prototype </h1>
        <canvas ref='canvas' width={400} height={400}></canvas>
        <button onClick={this.clearModules.bind(this)}>Remove every module</button>
        <button onClick={this.logModules.bind(this)}>Click To Log Modules</button>
        <button onClick={this.processModules}>Process Every Active Module</button>
        <button onClick={this.uploadImage}>Upload Image</button>
        <hr></hr>
        <ModuleAdder buttonFunction={this.addModule}/>
        <hr></hr>
        <ModuleViewer modules={this.state.activeModules} removeFunction={this.removeModule}/>
      </React.Fragment>
    );
  }
}

export default ArtGenerator;