import React from 'react';

class BaseModule extends React.Component{

    constructor(props){
        super(props);
        this.key = this.props.moduleKey;

        this.moduleStyle = {
            display: 'inline-block',
            outline: '1px solid black',
            padding: '10px'
        };

        this.updateValues = this.updateValues.bind(this);
    }

    componentDidMount(){
        this.props.artGen.registerModule(this)
    }

    updateValues(event){
        this.setState({[event.target.id]: event.target.value});
        this.props.artGen.processModules();
    }

    render(){
        return <h1> Generic Type: {this.type}</h1>
    }
}

export default BaseModule 
