import React from 'react';
import GreenUnit from '../Images/greenunit.jpg';
import { Spring } from 'react-spring';
import Projects from './Projects.jsx';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusing:false,
      chosenProject:"",
      hoveredProject:"",
      xCoord:0,
      yCoord:0
    }
    this._onMouseMove = this._onMouseMove.bind(this);
    this.getDataValue = this.getDataValue.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
  }

  componentDidUpdate(prevstate){
    console.log("< Component did update >")
  }

  getDataValue(e){
    let clickedLink = e.currentTarget;
    let data = clickedLink.getAttribute('data-value')
    this.setState(state => ({
      //chosenProject:this.props.goTo("test")
      chosenProject:data
    }))

    // console.log(data);
    // can get state to this component, 
    // just cant pass it upwards
  }
  
  mouseleave(e){
    this.setState({ xCoord: 0, yCoord: 0, hoveredProject:"" });

  }

  // this is where the picture animation will happen
  _onMouseMove(e) {
    this.setState({ 
      xCoord: e.nativeEvent.offsetX, 
      yCoord: e.nativeEvent.offsetY, 
      hoveredProject:e.target.innerText 
    });


    // console.log(e.target.innerText)
  }

  render() {
    return (
      <ul 
      class="projects">


       <Projects/>
        
        
        {/* <li>
          <a onClick={this.getDataValue } data-value="Nike x Off-White">
            <div
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
              Nike x Off-White
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>
        <li>
          <a onClick={this.getDataValue } data-value="Fat Night" >
            <div 
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
                Fat Night
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>
        <li>
          <a onClick={this.getDataValue } data-value="Urban Outfitters">
            <div               
              onMouseMove={this._onMouseMove} 
              onMouseLeave={this.mouseleave}
              class="title">
              Urban Outfitters
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
            </a>
        </li>
        <li>
          <a onClick={this.getDataValue } data-value="Spencer Radcliffe">
            <div               
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
              Spencer Radcliffe
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>
        <li>
          <a onClick={this.getDataValue } data-value="Kim Tee">
            <div           
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
                Kim Tee
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>
        <li>    
          <a onClick={this.getDataValue } data-value="Muerte's Death">
            <div 
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
              Muerte's Death
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>  
        <li> 
          <a onClick={this.getDataValue } data-value="LaCroix">
            <div 
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
                LaCroix
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>  
        <li>
          <a onClick={this.getDataValue } data-value="Katie Dey">
            <div 
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
                Katie Dey
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>
        <li>
          <a onClick={this.getDataValue } data-value="Space Gators">
            <div      
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
              Space Gators
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li>
        <li>
          <a onClick={this.getDataValue } data-value="REI">
            <div 
              onMouseMove={this._onMouseMove}
              onMouseLeave={this.mouseleave} 
              class="title">
                REI
            </div>
            <div class="year">2019</div>
            <div class="image"><img></img></div>
          </a>
        </li> */}
      </ul>
    );
  }
}

export default Landing;
