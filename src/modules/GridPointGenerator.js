import React from 'react';
import BaseModule from './BaseModule'

class GridPointGenerator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
        this.state = {
            points: 75,
        }
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.artGen.removeModule(this.props.moduleKey)}>X</button>
                    <h1>Grid Point Generator</h1>
                    <h2>Point Density</h2>
                    <input type="range" step="1" min="1" max="25" onChange={this.updateValues} value={this.state.points}  id="points"></input>
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