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
        // console.log("logging the data ")
        console.log(data);
        // console.log(data.imageData)
        this.setState({art: data})
    })
  }

  render(){
    return (
          this.state.art.map(function(item, i){
            return <ArtWidget text={item.user} canvasData={item.imageData}/>
          })
        // <React.Fragment>
        //     <h1> this is the browse art page </h1>
        // </React.Fragment>
    );
  }
}

export default Browser;