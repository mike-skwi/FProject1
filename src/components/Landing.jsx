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
      // lowercase projects
      class="projects">
       <Projects xCoord={this.state.xCoord} yCoord={this.state.yCoord}/>
      </ul>
    );
  }
}

export default Landing;
