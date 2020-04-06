import React from 'react';

class ModuleAdder extends React.Component{

    render(){
        return(
            <React.Fragment>
                <button>Point Generator</button>
                <button>Grid Point Generator</button>
                <button>Circle Renderer</button>
                <button>Strand Generator</button>
            </React.Fragment>
        );
    }
}

export default ModuleAdder;