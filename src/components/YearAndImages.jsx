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
                    <h1>{this.props.year}</h1>
                    {console.log(this.props.year)}
                    <img src={GreenUnit}/>
                </div>
        );
        }
        return(null);
    }
}

const yearStyle = {

}

const imgStyle = {

}

export default YearAndImages;