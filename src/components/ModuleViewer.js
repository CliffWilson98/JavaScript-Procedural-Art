import React from 'react';
import PointGenerator from '../modules/PointGenerator.js';
import GridPointGenerator from '../modules/GridPointGenerator.js';
import PointTranslator from '../modules/PointTranslator.js';
import CircleDrawer from '../modules/CircleDrawer.js';
import RectangleDrawer from '../modules/RectangleDrawer.js';
import TrigPointGenerator from '../modules/TrigPointGenerator.js';

class ModuleViewer extends React.Component{

    render(){
        return this.props.modules.map((module) =>{
            if (module.type == "point"){
                return <PointGenerator moduleKey={module.key} artGen={this.props.artGen}/>
            }
            else if (module.type == "trigPoint"){
                return <TrigPointGenerator moduleKey={module.key} artGen={this.props.artGen}/>
            }
            else if (module.type == "gridPoint"){
                return <GridPointGenerator moduleKey={module.key} artGen={this.props.artGen}/>
            }
            else if (module.type == "translator"){
                return <PointTranslator moduleKey={module.key} artGen={this.props.artGen}/>
            }
            else if (module.type == "circle"){
                return <CircleDrawer moduleKey={module.key} artGen={this.props.artGen}/>
            }
            else if (module.type == "rectangle"){
                return <RectangleDrawer moduleKey={module.key} artGen={this.props.artGen}/>
            }
            return <h1> not a module </h1>
        });
    }
}

export default ModuleViewer;