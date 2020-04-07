import React from 'react';
import Module from './Module.js'
import PointGenerator from '../modules/PointGenerator.js';
import CircleDrawer from '../modules/CircleDrawer.js';

class ModuleViewer extends React.Component{

    render(){
        console.log("logging modules " + this.props.modules)

        return this.props.modules.map((module) =>{
            if (module.type == "point"){
                return <PointGenerator type="point module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules}/>
            }
            if (module.type == "circle"){
                return <CircleDrawer type="circle module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules}/>
            }
            return <h1> not a module </h1>
        });
    }
}

export default ModuleViewer;