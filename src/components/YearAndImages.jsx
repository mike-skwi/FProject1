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
                    <p id="year" style={yearStyle}>{this.props.year}</p>
                    {console.log(this.props.year)}
                    {/* <img src={GreenUnit}/> */}
                </div>
        );
        }
        return(null);
    }
}

const yearStyle = {
    background:'red',
    color:'white',
    display:'inline-block'

    // SHOULD display on cursor
}

const imgStyle = {

}

export default YearAndImages;