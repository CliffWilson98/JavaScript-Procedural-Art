import React from 'react';
import ArtWidget from './ArtWidget';

class Browser extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        this.props.art.map(function(item, i){
          return <ArtWidget image={item.imageData}/>
          })
    );
  }
}

export default Browser;