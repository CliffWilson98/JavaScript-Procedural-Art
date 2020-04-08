import React from 'react';
import PointGenerator from '../modules/PointGenerator.js';
import GridPointGenerator from '../modules/GridPointGenerator.js';
import CircleDrawer from '../modules/CircleDrawer.js';

class ModuleViewer extends React.Component{

    render(){
        return this.props.modules.map((module) =>{
            if (module.type == "point"){
                return <PointGenerator type="point module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules}/>
            }
            if (module.type == "gridPoint"){
                return <GridPointGenerator type="grid point module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules}/>
            }
            if (module.type == "circle"){
                return <CircleDrawer type="circle module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules}/>
            }
            return <h1> not a module </h1>
        });
    }
}

export default ModuleViewer;