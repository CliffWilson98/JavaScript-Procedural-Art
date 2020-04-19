import React from 'react';
import PointGenerator from '../modules/PointGenerator.js';
import GridPointGenerator from '../modules/GridPointGenerator.js';
import PointTranslator from '../modules/PointTranslator.js';
import CircleDrawer from '../modules/CircleDrawer.js';
import RectangleDrawer from '../modules/RectangleDrawer.js';

class ModuleViewer extends React.Component{

    //TODO maybe get rid of having to pass all of these duplicate values to the modules
    render(){
        return this.props.modules.map((module) =>{
            if (module.type == "point"){
                return <PointGenerator type="point module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules} updateMethod={this.props.updateMethod}/>
            }
            else if (module.type == "gridPoint"){
                return <GridPointGenerator type="grid point module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules} updateMethod={this.props.updateMethod}/>
            }
            else if (module.type == "translator"){
                return <PointTranslator type="translator module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules}/>
            }
            else if (module.type == "circle"){
                return <CircleDrawer type="circle module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules} updateMethod={this.props.updateMethod}/>
            }
            else if (module.type == "rectangle"){
                return <RectangleDrawer type="rectangle module" moduleKey={module.key} removeFunction={this.props.removeFunction} moduleArray={this.props.modules}/>
            }
            return <h1> not a module </h1>
        });
    }
}

export default ModuleViewer;