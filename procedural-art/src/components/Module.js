import React from 'react';
import { createSecurePair } from 'tls';

class Module extends React.Component{

    //TODO make delete button into its own component
    constructor(props){
        super(props)
        this.moduleStyle = {
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };
    }

    deleteModule(number){
        console.log("deleting: " + number);
    }

    render(){
        //TODO need to make sliders actually do something
        if (this.props.type == "point"){
            return this.pointGeneratorModule();
        }
        else if (this.props.type == "circle"){
            return this.circleModule();
        }
        else{
            return(
                <div style={this.moduleStyle}>
                    <h1>That module does not exist</h1>
                </div>
            )
        }
    }

    pointGeneratorModule(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Point Generator Index: {this.props.moduleKey}</h1>
                    <input type="range" step="1" min="1" max="100" value="25" className="slider" id="myRange"></input>
                </div>
            </React.Fragment>
        );
    }

    circleModule(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Circle Drawer Index: {this.props.moduleKey}</h1>
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
        )

    }
}

export default Module;