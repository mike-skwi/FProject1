import React from 'react';
import jakejohn from '../Images/jakejohn030.jpg';

class AboutUs extends React.Component {

    render(){
        return(
            <div class="aboutContainer"> 
                <h2 id="aboutUs">About Us</h2>
                <img id="image" src={jakejohn}/>
                <p class="aboutUsWords"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales ullamcorper enim, sit amet rhoncus leo finibus a. Sed auctor vestibulum nisi, at scelerisque purus luctus et. Vestibulum vitae tortor sit amet tortor aliquam ullamcorper convallis in dui. Maecenas a tincidunt arcu. Pellentesque egestas dolor vitae eros imperdiet, non sollicitudin mauris pulvinar. Morbi placerat quam in maximus egestas. Morbi vel semper turpis.</p>
            </div>
        );
    }
}

export default AboutUs;