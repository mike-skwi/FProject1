import React from 'react';
import '../../node_modules/video-react/dist/video-react.css'; 
import Vimeo from 'react-vimeo';
import GreenUnit from '../Images/greenunit.jpg';
import JakeJohn from '../Images/jakejohn030.jpg';

import { Player } from 'video-react';



class IndivProject extends React.Component {
    constructor(props){
        super(props)
        this.state={
            activeProject:""
        }

    }

    componentDidMount(){
        // conditional? 
        this.setState({
            activeProject:this.props.obj
        })
    }

    render(){
        return(
            <div class="videoInfoContainer"> 
                <h1 id="projectNameVideo">{this.state.activeProject.title}</h1>
                <div id="projectVideo">
                    <iframe width="100%" height="100%" src="https://player.vimeo.com/video/109041199"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
           </div>
                <h2 id="projectVideoTitle" class="biggerProjectText" >{this.state.activeProject.year}</h2>
                <p id="projectDescription" class="projectPageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur fermentum blandit. Nulla sit amet dolor magna. Etiam aliquam diam non diam vestibulum, ut molestie massa viverra. Aenean quis ante a enim ultrices accumsan lobortis auctor nisi. Maecenas egestas libero vitae tristique condimentum. Ut quis mi tortor. Nunc urna urna, ullamcorper non justo a, efficitur finibus neque.</p>

                <div class="videoImages">

                    <img class="fourImages" id="projectImageLeft" />
                    <img class="fourImages" id="projectImageRight" />
                    <img class="fourImages" id="projectImageLeft" />
                    <img class="fourImages" id="projectImageRight" />

                </div>

                {/* <p id="projectDescription" class="projectPageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur fermentum blandit. Nulla sit amet dolor magna. Etiam aliquam diam non diam vestibulum, ut molestie massa viverra. Aenean quis ante a enim ultrices accumsan lobortis auctor nisi. Maecenas egestas libero vitae tristique condimentum. Ut quis mi tortor. Nunc urna urna, ullamcorper non justo a, efficitur finibus neque.</p> */}
                
                <h2 id="creditTitle" class="projectPageText biggerProjectText">Credits:</h2>
                <p id="credits" class="projectPageText">Directed by: Jake Nokovic. PA: Will Tooke</p>


            </div>
        );
    }
}

export default IndivProject;