import React from 'react';
import BaseModule from './BaseModule'
import { Button } from 'reactstrap'

class TrigPointGenerator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
        this.state = {
            points: 75,
            amplitude: 50,
            frequency: 1,
            seed: 25,
            x: 'sin',
            y: 'cos'
        }
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <Button color="danger" onClick={() => this.props.artGen.removeModule(this.props.moduleKey)}>Remove</Button>
                    <h1>Trig Point Generator</h1>
                    <h2>Seed</h2>
                    <input type="number" value={this.state.seed} onChange={this.updateValues} id="seed"></input>
                    <hr></hr>
                    <div class="row">
                        <div class="col-sm">
                            <h2>X</h2>
                            <form>
                                <select name = "x" onChange={this.updateValues} value={this.state.x} id="x">
                                    <option value = "sin" selected>Sin</option>
                                    <option value = "cos">Cos</option>
                                    <option value = "tan">Tan</option>
                                </select>
                            </form>
                        </div>
                        <div class="col-sm">
                            <h2>Y</h2>
                            <form>
                                <select name = "y" onChange={this.updateValues} value={this.state.y} id="y">
                                    <option value = "sin" selected>Sin</option>
                                    <option value = "cos">Cos</option>
                                    <option value = "tan">Tan</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <hr></hr>
                    <h2>Amplitude</h2>
                    <input type="number" value={this.state.amplitude} onChange={this.updateValues} id="amplitude"></input>
                    <h2>Number of points</h2>
                    <input type="range" step="1" min="1" max="100" onChange={this.updateValues} value={this.state.points} id="points"></input>
                </div>
            </React.Fragment>
        );
    }

    process(info){
        let pointArray = [];
        let seed = this.state.seed;
        let amp = this.state.amplitude
        for (let i = 0; i < this.state.points; i++){
            
            let xTrig = this.state.x;
            var xFunction = null
            if (xTrig == 'sin'){ xFunction = (x) => {return Math.sin(x);};}
            else if (xTrig == 'cos'){ xFunction = (x) => {return Math.cos(x)};}
            else { xFunction = (x) => {return Math.tan(x)};}

            let yTrig = this.state.y;
            let yFunction = null
            if (yTrig == 'sin'){ yFunction = (x) => {return Math.sin(x);};}
            else if (yTrig == 'cos'){ yFunction = (x) => {return Math.cos(x);};}
            else { yFunction = (x) => {return Math.tan(x);};}

            let x = (xFunction(seed + i) * amp) + 200;
            let y = (yFunction(seed + i) * amp) + 200;

            pointArray.push({x: x, y: y});
        }

        info.result = pointArray;
        return info;
    }
}

export default TrigPointGenerator;
