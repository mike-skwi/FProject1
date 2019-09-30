import React from 'react';
import GreenUnit from '../Images/greenunit.jpg';


class YearAndImages extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            visible:false,
        }
    
        const imgArray =[
            this.props.activeProject.image1
        ]
    
    }
    
    componentDidUpdate(e){
        console.log("did update")
    }

    render(){
        if (this.props.activeProject === this.props.projectName){
            console.log("Img url -> " + this.props.img1);
            const images = [ 
                this.props.img1,
                this.props.img2,
                this.props.img3,
                this.props.img4
            ]
            if(this.props.released === false){
                // this is for making it render without the iamge if there are none
                return(
                    <div class="yearAndImages">   
                        <span id="year" style={yearStyle}>{this.props.year}</span>
                        <span id="coming_soon"> Coming Soon </span>
                    </div>
            )}
            return(
                <div class="yearAndImages"> 
                    <img id="landingImage" style={imgStyle} src={images[0]}></img>
                    <span id="year" style={yearStyle}>{this.props.year}</span>
                </div>
        );}
        return(null);
    }
}

const yearStyle = {
}

const imgStyle = {
    width:'350px',
    height:'200px',
    left:'0%',
    zIndex:'-20'
}

export default YearAndImages;