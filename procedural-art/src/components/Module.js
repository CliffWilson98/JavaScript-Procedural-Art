import React from 'react';

class Module extends React.Component{


    render(){

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
}

export default Module;