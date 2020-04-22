import React from 'react';
import BaseModule from './BaseModule'

class PointTranslator extends BaseModule{

    constructor(props){
        super(props);
        this.process = this.process.bind(this);
        this.state = {
            xAmount: 25,
            yAmount: 25,
            randomize: false,
            randomizeRange: 10
        }
        this.process = this.process.bind(this);

        this.updateRandomize = this.updateRandomize.bind(this);
    }

    updateRandomize(event){
        this.setState({randomize: !this.state.randomize})
    }

    render(){
        return(
            <React.Fragment>
                <div style={this.moduleStyle}>
                    <button onClick={() => this.props.artGen.removeModule(this.props.moduleKey)}>X</button>
                    <h1>Point Translator</h1>
                    <h2>Translation Amount</h2>
                    <h3>X</h3>
                    <input type="range" step="1" min="1" max="400" onChange={this.updateValues} value={this.state.xAmount} id="xAmount"></input>
                    <h3>Y</h3>
                    <input type="range" step="1" min="1" max="400" onChange={this.updateValues} value={this.state.yAmount} id="yAmount"></input>
                    <h3>Randomize</h3>
                    <input type="checkbox" onChange={this.updateRandomize} checked={this.state.randomize} id="randomize"></input>
                    <h3>Randomize Range</h3>
                    <input type="range" step="1" min="1" max="200" onChange={this.updateValues} value={this.state.randomizeRange} id="randomizeRange"></input>
                </div>
            </React.Fragment>
        );
    }

    //TODO add randomize option
    process(info){
        let points = info.result;

        let xTranslation = this.state.xAmount;
        let yTranslation = this.state.yAmount;

        for (let i = 0; i < points.length; i++){
            if (this.state.randomize){
                points[i].x += parseInt(xTranslation) + (Math.random() * this.state.randomizeRange);
                points[i].y += parseInt(yTranslation) + (Math.random() * this.state.randomizeRange);
            }
            else{
                points[i].x += parseInt(xTranslation);
                points[i].y += parseInt(yTranslation);
            }
        }

        info.result = points;
        return info;
    }
}

export default PointTranslator;