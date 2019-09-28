import React from 'react';
import GreenUnit from '../Images/greenunit.jpg';


class YearAndImages extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            visible:false
        }
    
        const img1 = this.props.activeProject.image1;
        console.log(img1 + "AHH");
        const imgArray =[
            this.props.activeProject.image1
        ]
    
    }
    
    
    render(){
        if (this.props.activeProject === this.props.projectName){
            return(
                <div class="yearAndImages"> 
                    <span id="year" style={yearStyle}>{this.props.year}</span>
                    <img id="testtt" style={imgStyle}></img>
                    {/* <span id="hoverImage" style={imgStyle}>{GreenUnit}</span> */}
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
    width:'500px',
    height:'500px',


}

export default YearAndImages;