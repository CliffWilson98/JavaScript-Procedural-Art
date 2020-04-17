import React from 'react';

class ArtWidget extends React.Component{

  constructor(props){
    super(props);

    this.style = {
        display: 'inline-block',
        outline: '1px solid black',
        padding: '10px'
    };
  }

  render(){
    return (
        <React.Fragment>
            <canvas ref='artCanvas' width='400' height='400'></canvas>
            <img src={this.props.image}></img>
            <h1 style={this.style}> {this.props.text} </h1>
        </React.Fragment>
    );
  }
}

export default ArtWidget;