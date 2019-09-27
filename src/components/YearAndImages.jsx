import React from 'react';
import GreenUnit from '../Images/greenunit.jpg';


class YearAndImages extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            visible:false
        }
    }
    render(){
        if (this.props.activeProject === this.props.projectName){
            return(
                <div class="yearAndImages"> 
                    <span id="year" style={yearStyle}>{this.props.year}</span>
                    {/* <span id="titleNameProjectList">Sponge sponge sponge</span> */}
                    {/* <img id="yearImage" src={GreenUnit}/> */}
                </div>
        );}
        return(null);
    }
}

const yearStyle = {
    // SHOULD display on cursor
}

const imgStyle = {

}

export default YearAndImages;