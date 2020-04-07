import React from 'react';

class Module extends React.Component{

    render(){

        //TODO find out how to not repeate moduleStyle
        //TODO need to make sliders actually do something
        const moduleStyle = {
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };

        if (this.props.type == "point"){
            return this.pointGeneratorModule();
        }
        else if (this.props.type == "circle"){
            return this.circleModule();
        }
        else{
            return(
                <div style={moduleStyle}>
                    <h1>That module does not exist</h1>
                </div>
            )
        }
    }

    pointGeneratorModule(){
        const moduleStyle = {
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };

        return(
            <React.Fragment>
                <div style={moduleStyle}>
                    <h1>Point Generator</h1>
                    <input type="range" step="1" min="1" max="100" value="25" className="slider" id="myRange"></input>
                </div>
            </React.Fragment>
        );
    }

    circleModule(){
        const moduleStyle = {
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };

        return(
            <React.Fragment>
                <div style={moduleStyle}>
                    <h1>Circle Drawer</h1>
                    <h2>Number of Circles</h2>
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
                    <h3>Gradient Color 1</h3>
                    <input type="color"></input>
                    <h3>Gradient Color 2</h3>
                    <input type="color"></input>
                    <h3>Gradient Color 3</h3>
                    <input type="color"></input>
                </div>
            </React.Fragment>
        )

    }

}

export default Module;