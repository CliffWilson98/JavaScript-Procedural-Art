import React from 'react';

class TestComponent extends React.Component{

    constructor(props){
        super(props);
        this.value = 10
        this.five = 5
        this.string = "hello"
        this.state = {
            first: 1,
            second: 4,
            third: 10
        }
    }

    componentDidMount(){
        console.log('it mounted')
        this.props.callThis(this);
    }

    render(){
        return(
            <h1>test comp</h1>
        );
    }
}

export default TestComponent;