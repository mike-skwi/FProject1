import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import altLogo from '../Images/Alt_Logo.png'
import logo from '../Images/Main_Logo.png'

class Header extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div class="banner">

            <Spring
            from={{opacity:0, marginTop:-500}}
            to={{opacity:1, marginTop:0}}
            config={{tension:150,friction:10, precision:1}}
            >
            { props => (
              <div style={props}>
                {/*Put anything you want to animate here */}
                <Spring
                        from={{marginTop:-500}}
                        to={{marginTop:0}}
                        config={{delay:100, duration:100}}
                    >
                        {props=>(
                            <div style={props}>
                              <img id="logo" src={logo}/>
                            </div>
                        )}
                    </Spring>

                <Spring
                        from={{opacity:0}}
                        to={{opacity:1}}
                        config={{delay:100, duration:1000}}
                    >
                        {props=>(
                            <div style={props}>
                                <a id="about">About Us</a>
                            </div>
                        )}
                    </Spring>



                
                <Spring
                        from={{rotation:"0deg"}}
                        to={{rotation:"360deg"}}
                        config={config.gentle}
                    >
                        {props=>(
                            <div style={props}>
                                {/* notice the id of about us */}
                                <a id="attic">About Us</a>
                            </div>
                        )}
                    </Spring>

                
              </div>
            )
            }
            </Spring>

        </div>
      );
    }
  }
  
  export default Header;
  

