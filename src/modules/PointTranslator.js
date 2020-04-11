import React from 'react';
import BaseModule from './BaseModule'

class PointTranslator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
        this.state = {
            xAmount: 25,
            yAmount: 25,
        }
        this.changeX = this.changeX.bind(this);
        this.changeY = this.changeY.bind(this);
        this.process = this.process.bind(this);
    }

    componentDidMount(){
        this.registerModule(this.props.moduleArray, this.props.moduleKey, this);
    }

    changeX(event){
        this.setState({xAmount: event.target.value});
        console.log("X value " + event.target.value);
    }

    changeY(event){
        this.setState({yAmount: event.target.value});
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.removeFunction(this.props.moduleKey)}>X</button>
                    <h1>Point Translator Index: {this.props.moduleKey} Type: {this.type}</h1>
                    <h2>Translation Amount</h2>
                    <input type="range" step="1" min="1" max="400" onChange={this.changeX} value={this.state.xAmount} className="slider" id="myRange"></input>
                    <input type="range" step="1" min="1" max="400" onChange={this.changeY} value={this.state.yAmount} className="slider" id="myRange"></input>
                </div>
            </React.Fragment>
        );
    }

    process(points){
        let xTranslation = this.state.xAmount;
        let yTranslation = this.state.yAmount;

        for (let i = 0; i < points.length; i++){
            points[i].x += parseInt(xTranslation);
            points[i].y += parseInt(yTranslation);
        }
        return points;
    }
}

export default PointTranslator;