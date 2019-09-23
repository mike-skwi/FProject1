import React from 'react';
import '../../node_modules/video-react/dist/video-react.css'; 
import Vimeo from 'react-vimeo';
import GreenUnit from '../Images/greenunit.jpg';
import { Player } from 'video-react';



class IndivProject extends React.Component {

    render(){
        return(
            <div class="videoInfoContainer"> 
                <h1 id="projectNameVideo">Project Name</h1>
                <div id="projectVideo"></div>
                <h2 id="projectVideoTitle">Video Title</h2>
                <h2>Project Title</h2>
                <div class="videoImages">
                    <img id="projectImageLeft" src={GreenUnit}/>
                    <img id="projectImageRight" src={GreenUnit}/>
                </div>

                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur fermentum blandit. Nulla sit amet dolor magna. Etiam aliquam diam non diam vestibulum, ut molestie massa viverra. Aenean quis ante a enim ultrices accumsan lobortis auctor nisi. Maecenas egestas libero vitae tristique condimentum. Ut quis mi tortor. Nunc urna urna, ullamcorper non justo a, efficitur finibus neque.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur fermentum blandit. Nulla sit amet dolor magna. Etiam aliquam diam non diam vestibulum, ut molestie massa viverra. Aenean quis ante a enim ultrices accumsan lobortis auctor nisi. Maecenas egestas libero vitae tristique condimentum. Ut quis mi tortor. Nunc urna urna, ullamcorper non justo a, efficitur finibus neque.</p>

                <span> Test </span>
            </div>
        );
    }
}

export default IndivProject;