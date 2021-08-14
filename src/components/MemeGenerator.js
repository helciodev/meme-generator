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
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
      const api = 'https://api.imgflip.com/get_memes';
      fetch(api).then(response => response.json()).then( response  => {
        const {memes} = response.data 
        this.setState({allMemeImgs: memes})
        // console.log(this.state.allMemeImgs)
       } )
        
    }
      /**
        * Create the onChagne handler method
        * It should update the corresponding state on every change of the input box
        */
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    }

  render() {

    return(
      <>
      <form className="meme-form">
      <label>
      topText:
        <input
        type="text"
        name="topText" 
        placeholder="top text" 
        value={this.state.topText} 
        onChange={this.handleChange} />
        </label>
        <label>
        bottom text:
        <input 
        type="text"
        name="bottomText" 
        value={this.state.bottomText} 
        placeholder="bottom text" 
        onChange={this.handleChange} />
        </label>
     
      <button>Generate meme</button>
      </form>
      </>
    )
  }
}

export default MemeGenerator;