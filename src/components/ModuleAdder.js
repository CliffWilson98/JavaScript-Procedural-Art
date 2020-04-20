import React from 'react';

class ModuleAdder extends React.Component{

    render(){
        return(
            <React.Fragment>
                <button onClick={() => this.props.buttonFunction("point")}>Point Generator</button>
                <button onClick={() => this.props.buttonFunction("trigPoint")}>Trig Point Generator</button>
                <button onClick={() => this.props.buttonFunction("gridPoint")}>Grid Point Generator</button>
                <button onClick={() => this.props.buttonFunction("translator")}>Point Translator</button>
                <button onClick={() => this.props.buttonFunction("circle")}>Circle Renderer</button>
                <button onClick={() => this.props.buttonFunction("rectangle")}>Rectangle Renderer</button>
                <button onClick={() => this.props.buttonFunction("strand")}>Strand Generator</button>
            </React.Fragment>
        );
    }
}

export default ModuleAdder;