import React from 'react';

import logo from '../Images/Main_Logo.png'

class Header extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div class="banner">
            <a id="about">About Us</a>
            <img id="logo" src={logo}/>
            
            <a id="attic">The Attic</a>
        </div>
      );
    }
  }
  
  export default Header;
  

