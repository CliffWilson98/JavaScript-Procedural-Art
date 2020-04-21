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
          <div style={this.style}>
            <img src={this.props.image}></img>
          </div>
        </React.Fragment>
    );
  }
}

export default ArtWidget;