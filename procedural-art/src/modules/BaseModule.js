import React from 'react';

class BaseModule extends React.Component{

    constructor(props){
        super(props);
        this.type = this.props.type;
        this.registerModule = this.registerModule.bind(this);

        this.moduleStyle = {
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };
    }

    render(){
        return <h1> Generic Type: {this.type}</h1>
    }

    registerModule(moduleArray, moduleKey, moduleToRegister){
        console.log("registering");
        for (let i = 0; i <  moduleArray.length; i ++){
            if (moduleArray[i].key == moduleKey){
                moduleArray[i].module = moduleToRegister;
            }
        }
    }
}

export default BaseModule 
