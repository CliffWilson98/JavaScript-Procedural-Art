import React from 'react';
import Module from './Module.js'

class ModuleViewer extends React.Component{

    render(){
        console.log("logging modules " + this.props.modules)
        return(
            <div>
            {this.props.modules.map((module) =>(
                <React.Fragment>
                    <Module type={module.name} moduleKey={module.key} removeFunction={this.props.removeFunction}/>
                </React.Fragment>
            ))}
            </div>
        );
    }
}

export default ModuleViewer;