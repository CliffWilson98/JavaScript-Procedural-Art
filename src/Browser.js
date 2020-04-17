import React from 'react';
import ArtWidget from './ArtWidget';

class Browser extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      art: []
    }
  }

  componentDidMount(){
    const uploadedArt = fetch(`http://localhost:7000/getArt`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        this.setState({art: data})
    })
  }

  render(){
    return (
          this.state.art.map(function(item, i){
            return <ArtWidget text={item.user} image={item.imageData}/>
          })
    );
  }
}

export default Browser;