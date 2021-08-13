import React, {Component} from 'react';

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
    }
  }
  render() {
    return(
      <header>
       <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="a troll face"/>
       <p>meme generator</p>
      </header>
    )
  }
}

export default Header;