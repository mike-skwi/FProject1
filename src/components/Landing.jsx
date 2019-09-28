import React from 'react';
import GreenUnit from '../Images/greenunit.jpg';
import { Spring } from 'react-spring';
import Projects from './Projects.jsx';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusing:false,
      shouldUpdate:false,
      chosenProject:"",
      hoveredProject:"",
      xCoord:0,
      yCoord:0,
    }
    this._onMouseMove = this._onMouseMove.bind(this);
    this.getDataValue = this.getDataValue.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
    // this.setParentPage = this.setParentPage(this);
  }

  componentDidUpdate(prevstate){
    console.log("< Component did update >")
    if(this.state.shouldUpdate == true){
      console.log("should update")
      this.props.goTo(this.state.chosenProject)
      this.setState({
        shouldUpdate:false
      })
    }
    // if(this.prevstate.chosenProject !== this.state.chosenProject && ){
    //   console.log("ahh")
    // }
  }

  getDataValue(e){
    let clickedLink = e.currentTarget;
    console.log("ah")
    let data = clickedLink.getAttribute('data-value')
    this.setState(state => ({
      //chosenProject:this.props.goTo("test")
      chosenProject:data
    }))

    // console.log(data);
    // can get state to this component, 
    // just cant pass it upwards
  }
  
  setParentPage = (page) =>{
    console.log("page:",page)
    this.setState({
      chosenProject:page,
      shouldUpdate:true
    })
    // console.log("This should not be undefined: ")
    // console.log(page);
  }


  mouseleave(e){
    this.setState({ xCoord: 0, yCoord: 0, hoveredProject:"" });
    // when done with the hover method, set image appear to false
    
  }

  // this is where the picture animation will happen
  _onMouseMove(e) {
    this.setState({ 
      xCoord: e.nativeEvent.offsetX, 
      yCoord: e.nativeEvent.offsetY, 
      hoveredProject:e.target.innerText 
    });
    if (this.state.pictureOn == true){

    }

    // console.log(e.target.innerText)
  }




  render() {
    return (
      <ul 
      id="testst"

      // lowercase projects
        class="projects">
          
       <Projects 
        setNewPage={(page) => this.setParentPage(page) }
        xCoord={this.state.xCoord} 
        yCoord={this.state.yCoord}/>
      </ul>
    );
  }
}

let cursor = {
  
}

export default Landing;
