import React from 'react';

class ModuleAdder extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div class="row">
                    <div class="col-sm">
                        <h3>Generators</h3>
                        <h5>Input: None</h5>
                        <h5>Output: Collection of points</h5>
                        <button onClick={() => this.props.buttonFunction("point")}>Point Generator</button>
                        <button onClick={() => this.props.buttonFunction("trigPoint")}>Trig Point Generator</button>
                        <button onClick={() => this.props.buttonFunction("gridPoint")}>Grid Point Generator</button>
                    </div>

                    <div class="col-sm">
                        <h3>Translators</h3>
                        <h5>Input: Collection of points</h5>
                        <h5>Output: Collection of points</h5>
                        <button onClick={() => this.props.buttonFunction("translator")}>Point Translator</button>
                    </div>

                    <div class="col-sm">
                        <h3>Renderers</h3>
                        <h5>Input: Collection of points</h5>
                        <h5>Output: Image data</h5>
                        <button onClick={() => this.props.buttonFunction("circle")}>Circle Renderer</button>
                        <button onClick={() => this.props.buttonFunction("rectangle")}>Rectangle Renderer</button>
                        <button onClick={() => this.props.buttonFunction("strand")}>Strand Generator</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ModuleAdder;