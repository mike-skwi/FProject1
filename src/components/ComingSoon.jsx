import React from 'react';

class ComingSoon extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div id="comingSoonPage">
                <img id="logo" class="comingSoonLogo" src={'https://res.cloudinary.com/coool/image/upload/v1569962834/Lava%20Shape%20GIF_Wide.gif'}/>
                <div id="textAndIcons">
                    <p id='comingSoonText'>Coming Soon
                    </p>
                </div>
                <div id="socialIcons">
                    <img id="twitIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/twitter_PNG15_ixivk3.png"/>
                    <img id="instaIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/Instagram-icon-WHITE_qtg9uh.png"/>
                    <img id="mailIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/584856b4e0bb315b0f7675ac_fqtcpf.png"/>
                </div>
            </div>
        );
    }
    
}



export default ComingSoon;