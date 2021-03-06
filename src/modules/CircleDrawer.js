import React from 'react';
import BaseModule from './BaseModule'

class CircleDrawer extends BaseModule{

    constructor(props){
        super(props);

        this.state = {
            gradient1: "#000000",
            gradient2: "#000000",
            ratio: .5
        }

        this.process = this.process.bind(this);
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.artGen.removeModule(this.props.moduleKey)}>X</button>
                    <h1>Circle Drawer</h1>
                    <h3>Gradient Color 1</h3>
                    <input type="color" value={this.state.gradient1} onChange={this.updateValues} id="gradient1"></input>
                    <input type="range" step=".01" min="0" max="1" onChange={this.updateValues} value={this.state.points} className="slider" id="ratio"></input>
                    <h3>Gradient Color 2</h3>
                    <input type="color" value={this.state.gradient2} onChange={this.updateValues} id="gradient2"></input>
                </div>
            </React.Fragment>
        );
    }

    process(info){

        let points = info.result;
        let ctx = info.ctx;
        for (let i = 0; i < points.length; i++){
            let point = points[i];
            let gradient = ctx.createRadialGradient(point.x, point.y, 20, point.x + 20, point.y + 20, 2 * Math.PI);
            gradient.addColorStop(0, this.state.gradient1);
            gradient.addColorStop(this.state.ratio, this.state.gradient2);
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.arc(point.x, point.y, 20, 0, 2 * Math.PI);
            ctx.fill();
        }

        return info;
    }
}

export default CircleDrawer;