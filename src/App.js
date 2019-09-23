import React from 'react';
import './App.css';
import Landing from './components/Landing'
import Header from './components/Header'
import AboutUs from './components/AboutUs';
import IndivProject from './components/IndivProject.jsx';

import { Spring } from 'react-spring';
//import { Transition, animated, config } from 'react-spring/renderprops';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      imageActive:false,
      pageName:"Project",
      selectedProject:"",
      shouldUpdate:false
    }
    this.goToPage = this.goToPage.bind(this);
  }

  componentDidUpdate(prevstate){
    // do an animation to show a "Switching of views"
    console.log("bb")
    console.log(prevstate)
  }

  goToPage = (page) =>{
    this.setState({
      selectedProject:page,
      shouldUpdate:true
      // pageName:this.selectedProject.title
    })
    console.log("Set to true")
    console.log("Selected project:")
    console.log(this.state.selectedProject)
    // this.setState({pageName:page.title})
  }

  componentDidUpdate =()=>{
    console.log("2");
    console.log(this.state.selectedProject.title);
     if(this.state.selectedProject !== "" && this.state.shouldUpdate === true){
      this.setState({
        pageName:this.state.selectedProject.title,
        shouldUpdate:false
      })
    }
  }


  // Write a small transition in the beginning of each of these 
  render() {
    if (this.state.pageName === "Landing"){
      return (
      <div className="App">
        <header className="App-header">
          <Header goTo={this.goToPage}/>
          <Landing goTo={this.goToPage}/>
        </header>
      </div>
    );
  }
  else if (this.state.pageName === "About"){
    return (
      <div className="App">
        <header className="App-header">
          <Header goTo={this.goToPage}/>
            <AboutUs/>
        </header>
      </div>
    );
  }
  else if (this.state.pageName === "Project"){
    return (
      <div className="App">
          <Header goTo={this.goToPage}/>
          <IndivProject name={this.state.selectedProject}/>
      </div>
    );
  }
}
}

export default App;
