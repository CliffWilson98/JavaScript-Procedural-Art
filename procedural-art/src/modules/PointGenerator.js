import React from 'react';
import BaseModule from './BaseModule'

class PointGenerator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
    }

    componentDidMount(){
        this.registerModule(this.props.moduleArray, this.props.moduleKey, this);
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Point Generator Index: {this.props.moduleKey} Type: {this.type}</h1>
                    <input type="range" step="1" min="1" max="100" value="25" className="slider" id="myRange"></input>
                </div>
            </React.Fragment>
        );
    }

    process(){
        console.log("this is the process method for the Point Generator")
        console.log("the type is " + this.type);
    }
}

export default PointGenerator;