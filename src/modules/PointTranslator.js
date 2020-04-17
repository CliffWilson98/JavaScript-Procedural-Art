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
                    <h1>Point Translator Index: {this.props.moduleKey} Type: {this.type}</h1>
                    <h2>Translation Amount</h2>
                    <input type="range" step="1" min="1" max="400" onChange={this.updateValues} value={this.state.xAmount} id="xAmount"></input>
                    <input type="range" step="1" min="1" max="400" onChange={this.updateValues} value={this.state.yAmount} id="yAmount"></input>
                </div>
            </React.Fragment>
        );
    }

    //TODO add randomize option
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