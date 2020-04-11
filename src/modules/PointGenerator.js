import React from 'react';
import BaseModule from './BaseModule'

class PointGenerator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
        this.state = {
            points: 75
        }
        this.changePoints = this.changePoints.bind(this);
    }

    componentDidMount(){
        this.registerModule(this.props.moduleArray, this.props.moduleKey, this);
    }

    changePoints(event){
        this.setState({points: event.target.value})
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Point Generator Index: {this.props.moduleKey} Type: {this.type}</h1>
                    <h2>Number of points</h2>
                    <input type="range" step="1" min="1" max="100" onChange={this.changePoints} value={this.state.points} className="slider" id="myRange"></input>
                </div>
            </React.Fragment>
        );
    }

    process(){
        let pointArray = [];
        for (let i = 0; i < this.state.points; i++){
            let x = Math.round(Math.random() * 400);
            let y = Math.round(Math.random() * 400);
            pointArray.push({x: x, y: y});
        }
        return pointArray;
    }
}

export default PointGenerator;