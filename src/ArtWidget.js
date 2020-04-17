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

  componentDidMount(){
    let canvas = this.refs.artCanvas;
    let ctx = canvas.getContext('2d');
    console.log("in art widget, logging canvasData")
    console.log(this.props.canvasData)
    // ctx.putImageData(this.props.canvasData.data, 0, 0);
    console.log(canvas);
    // console.log(this.props.canvasData)
  }

  render(){
    return (
        <React.Fragment>
            <canvas ref='artCanvas' width='400' height='400'></canvas>
            <img src={this.props.canvasData}></img>
            <h1 style={this.style}> {this.props.text} </h1>
        </React.Fragment>
    );
  }
}

export default ArtWidget;