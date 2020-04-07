import React from 'react';
import BaseModule from './BaseModule'

class CircleDrawer extends BaseModule{

    constructor(props){
        super(props);

        this.process = this.process.bind(this);
        this.registerModule = this.registerModule.bind(this)
    }

    componentDidMount(){
        this.registerModule(this.props.moduleArray, this.props.moduleKey, this);
    }

    //TODO find a way to not repeat this function
    // registerModule(){
    //     let array = this.props.moduleArray;
    //     for (let i = 0; i < array.length; i ++){
    //         if (array[i].key == this.props.moduleKey){
    //             array[i].module = this;
    //         }
    //     }
    // }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Circle Drawer Index: {this.props.moduleKey}</h1>
                    <h1>Type: {this.type}</h1>
                    <h2>Number of Circles</h2>
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
                    <h3>Gradient Color 1</h3>
                    <input type="color"></input>
                    <h3>Gradient Color 2</h3>
                    <input type="color"></input>
                    <h3>Gradient Color 3</h3>
                    <input type="color"></input>
                </div>
            </React.Fragment>
        );
    }

    process(){
        console.log("this is the process method for the Circle Drawer")
        console.log("the type is " + this.type);
    }
}

export default CircleDrawer;