import React from 'react';

class Module extends React.Component{


    render(){

        //TODO find out how to not repeate moduleStyle
        const moduleStyle = {
            // color: 'blue',
            // backgroundImage: 'url(' + imgUrl + ')',
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
                    <h1>Something went wrong</h1>
                </div>
            )
        }
        // return(
        //     <React.Fragment>
        //         <div style={moduleStyle}>
        //             <h1>Point Generator</h1>
        //             <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
        //         </div>
        //     </React.Fragment>
        // );
    }

    pointGeneratorModule(){
        const moduleStyle = {
            // color: 'blue',
            // backgroundImage: 'url(' + imgUrl + ')',
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };

        return(
            <React.Fragment>
                <div style={moduleStyle}>
                    <h1>Point Generator</h1>
                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                </div>
            </React.Fragment>
        );
    }

    circleModule(){
        const moduleStyle = {
            // color: 'blue',
            // backgroundImage: 'url(' + imgUrl + ')',
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };

        return(
            <React.Fragment>
                <div style={moduleStyle}>
                    <h1>Circle Drawer</h1>
                    <h2>Number of Circles</h2>
                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
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