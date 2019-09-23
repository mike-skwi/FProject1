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
      selectedProject:""
    }
    this.goToPage = this.goToPage.bind(this);
  }

  componentDidUpdate(prevstate){
    // do an animation to show a "Switching of views"
    console.log("bb")
    console.log(prevstate)
  }

  goToPage = (page) => {
    console.log("Hiiiit")
    this.setState(state => ({
      //chosenProject:this.props.goTo("test")
      pageName:page
    }))
  }


  // Write a small transition in the beginning of each of these 
  render() {
    if (this.state.pageName === "Landing"){
      return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Landing goTo={this.goToPage}/>
        </header>
      </div>
    );
  }
  else if (this.state.pageName === "About"){
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
            <AboutUs/>
          </header>
      </div>
    );
  }
  else if (this.state.pageName === "Project"){
    return (
      <div className="App">
          <Header/>
            <IndivProject/>
      </div>
    );
  }
}
}

export default App;
