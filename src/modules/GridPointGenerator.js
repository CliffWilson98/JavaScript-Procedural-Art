import React from 'react';
import BaseModule from './BaseModule'

class GridPointGenerator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
        this.state = {
            points: 75,
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
                    <h1>Grid Point Generator Index: {this.props.moduleKey} Type: {this.type}</h1>
                    <h2>Point Density</h2>
                    <input type="range" step="1" min="1" max="25" onChange={this.changePoints} value={this.state.points} className="slider" id="myRange"></input>
                </div>
            </React.Fragment>
        );
    }

    process(){
        let pointGrid = [];
        let points = this.state.points;
        let pointSpacingX = 400 / points
        let pointSpacingY = 400 / points

        for (let x = 0; x <= points; x ++){
            for (let y = 0; y <= points; y ++){
                pointGrid.push({x: x * pointSpacingX, y : y * pointSpacingY});
            }
        }
        return pointGrid;
    }
}

export default GridPointGenerator;