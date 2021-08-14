import React, {Component} from 'react';

class MemeGenerator extends Component {

  constructor(props){
    super(props)
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: '',
    }
  }

  componentDidMount() {
      const api = 'https://api.imgflip.com/get_memes';
      fetch(api).then(response => response.json()).then( response  => {
        const {memes} = response.data 
        this.setState({allMemeImgs: memes})
        // console.log(this.state.allMemeImgs)
       } )
        
    }

  render() {

    return(
      <>
      I am the meme generator
      </>
    )
  }
}

export default MemeGenerator;