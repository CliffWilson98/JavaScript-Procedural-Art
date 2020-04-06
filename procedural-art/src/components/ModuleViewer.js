import React from 'react';
import Module from './Module.js'

class ModuleViewer extends React.Component{

    render(){
        console.log("logging modules " + this.props.modules)
        return(
            <div>
            {this.props.modules.map(module =>(
                <React.Fragment>
                    <Module type={module}/>
                </React.Fragment>
            ))}
            {/* <Module type="point"/>
            <Module type="circle"/> */}
            </div>
        );
    }
}

export default ModuleViewer;