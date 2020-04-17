import React from 'react';
import BaseModule from './BaseModule'

class RectangleDrawer extends BaseModule{

    constructor(props){
        super(props);

        this.state = {
            gradient1: "#000000",
            gradient2: "#000000",
            ratio: .5,
            width: 20,
            height: 20
        }

        this.process = this.process.bind(this);
        this.registerModule = this.registerModule.bind(this)

        this.updateGradientOne = this.updateGradientOne.bind(this);
        this.updateGradientTwo = this.updateGradientTwo.bind(this);
        this.updateGradientRatio = this.updateGradientRatio.bind(this);
        this.updateValues = this.updateValues.bind(this);
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

    updateValues(event){
        this.setState({[event.target.id]: event.target.value});
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Rectangle Drawer Index: {this.props.moduleKey}</h1>
                    <h1>Type: {this.type}</h1>
                    <h3>Width</h3>
                    <input type="range" step="1" min="1" max="50" onChange={this.updateValues} value={this.state.width} className="width" id="width"></input>
                    <h3>Height</h3>
                    <input type="range" step="1" min="1" max="50" onChange={this.updateValues} value={this.state.height} className="height" id="height"></input>
                    <h3>Gradient Color 1</h3>
                    <input type="color" value={this.state.gradient1} onChange={this.updateGradientOne}></input>
                    <input type="range" step=".01" min="0" max="1" onChange={this.updateGradientRatio} value={this.state.points} className="slider" id="myRange"></input>
                    <h3>Gradient Color 2</h3>
                    <input type="color" value={this.state.gradient2} onChange={this.updateGradientTwo}></input>
                </div>
            </React.Fragment>
        );
    }

    //TODO fix linear gradient
    process(points){
        let c = document.createElement('canvas');
        c.width = 400;
        c.height = 400;
        let ctx = c.getContext('2d');

        let width = this.state.width;
        let height = this.state.height;
        console.log("width " + width)
        console.log("height " + height)

        for (let i = 0; i < points.length; i++){
            let point = points[i];
            let gradient = ctx.createLinearGradient(point.x, point.y, point.x + width, point.y + height);
            gradient.addColorStop(0, this.state.gradient1);
            gradient.addColorStop(this.state.ratio, this.state.gradient2);
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.rect(point.x, point.y, width, height);
            ctx.fill();
        }

        return ctx.getImageData(0, 0, c.width, c.height)
    }
}

export default RectangleDrawer;