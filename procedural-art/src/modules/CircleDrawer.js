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
        this.registerModule = this.registerModule.bind(this)

        this.updateGradientOne = this.updateGradientOne.bind(this);
        this.updateGradientTwo = this.updateGradientTwo.bind(this);
        this.updateGradientRatio = this.updateGradientRatio.bind(this);
    }

    componentDidMount(){
        this.registerModule(this.props.moduleArray, this.props.moduleKey, this);
    }

    //TODO find a way to combine these two methods
    updateGradientOne(event){
        this.setState({gradient1: event.target.value});
    }

    updateGradientTwo(event){
        this.setState({gradient2: event.target.value});
    }

    updateGradientRatio(event){
        this.setState({ratio: event.target.value});
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Circle Drawer Index: {this.props.moduleKey}</h1>
                    <h1>Type: {this.type}</h1>
                    <h3>Gradient Color 1</h3>
                    <input type="color" value={this.state.gradient1} onChange={this.updateGradientOne}></input>
                    <input type="range" step=".01" min="0" max="1" onChange={this.updateGradientRatio} value={this.state.points} className="slider" id="myRange"></input>
                    <h3>Gradient Color 2</h3>
                    <input type="color" value={this.state.gradient2} onChange={this.updateGradientTwo}></input>
                </div>
            </React.Fragment>
        );
    }

    process(points){
        let c = document.createElement('canvas');
        c.width = 400;
        c.height = 400;
        let ctx = c.getContext('2d');

        console.log("in process");

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

        return ctx.getImageData(0, 0, c.width, c.height)
    }
}

export default CircleDrawer;