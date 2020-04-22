import React from 'react';
import BaseModule from './BaseModule'

class PointGenerator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
        this.state = {
            points: 75,
            seed: 25
        }
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.artGen.removeModule(this.props.moduleKey)}>X</button>
                    <h1>Point Generator</h1>
                    <h2>Seed</h2>
                    <input type="number" value={this.state.seed} onChange={this.updateValues} id="seed"></input>
                    <h2>Number of points</h2>
                    <input type="range" step="1" min="1" max="100" onChange={this.updateValues} value={this.state.points} id="points"></input>
                </div>
            </React.Fragment>
        );
    }

    process(info){
        let pointArray = [];
        let seed = this.state.seed;
        for (let i = 0; i < this.state.points; i++){
            let x = Math.abs((Math.sin(seed + i * .349)) * 400);
            let y = Math.abs((Math.sin(seed + i)) * 400);
            pointArray.push({x: x, y: y});
        }

        info.result = pointArray;
        return info;
        // return {'result': pointArray, 'ctx': ctx};
    }
}

export default PointGenerator;