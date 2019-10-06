import React from 'react';
import { Spring, config } from 'react-spring/renderprops';

class ComingSoon extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hoveredIcon:"",
            hovering:false
        }
        this.hoverOverImage = this.hoverOverImage.bind(this);
        this.leaveImage = this.leaveImage.bind(this);
    }



    hoverOverImage = (e) =>{
        this.setState({hovering:true, hoveredIcon:e.target.id})
        console.log(e.target.id);
    }

    leaveImage = (e) =>{
        this.setState({hovering:false, hoveredIcon:""})
    }



    render(){
        if(this.state.hovering === true){
            if(this.state.hoveredIcon === 'instaIcon'){
                return(
                    <div id="comingSoonPage">
                        <img id="logo" class="comingSoonLogo" src={'https://res.cloudinary.com/coool/image/upload/v1569962834/Lava%20Shape%20GIF_Wide.gif'}/>
                        <div id="textAndIcons">
                            <p id='comingSoonText'>Coming Soon
                            </p>
                        </div>
                        <div id="socialIcons">
                            <img value='twitter' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="twitIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/twitter_PNG15_ixivk3.png"/>
                            <img value='insta' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="instaIcon" src="https://res.cloudinary.com/coool/image/upload/co_rgb:db5545,e_colorize:70/v1570050941/icons/Instagram-icon-WHITE_qtg9uh.png"/>
                            <img value='mail' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="mailIcon" src="https://res.cloudinary.com/coool/image/upload/c_crop,h_920,w_1200/v1570050941/icons/584856b4e0bb315b0f7675ac_fqtcpf.png"/>
                        </div>
                    </div>
                );
            }
            else if(this.state.hoveredIcon === 'twitIcon'){
                return(
                    <div id="comingSoonPage">
                        <img id="logo" class="comingSoonLogo" src={'https://res.cloudinary.com/coool/image/upload/v1569962834/Lava%20Shape%20GIF_Wide.gif'}/>
                        <div id="textAndIcons">
                            <p id='comingSoonText'>Coming Soon
                            </p>
                        </div>
                        <div id="socialIcons">
                            <img value='twitter' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="twitIcon" src="https://res.cloudinary.com/coool/image/upload/co_rgb:0079b5,e_colorize:70/v1570050941/icons/twitter_PNG15_ixivk3.png"/>
                            <img value='insta' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="instaIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/Instagram-icon-WHITE_qtg9uh.png"/>
                            <img onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="mailIcon" src="https://res.cloudinary.com/coool/image/upload/c_crop,h_920,w_1200/v1570050941/icons/584856b4e0bb315b0f7675ac_fqtcpf.png"/>
                        </div>
                    </div>
                );
            }
            else if(this.state.hoveredIcon === 'mailIcon'){
                return(
                    <div id="comingSoonPage">
                        <img id="logo" class="comingSoonLogo" src={'https://res.cloudinary.com/coool/image/upload/v1569962834/Lava%20Shape%20GIF_Wide.gif'}/>
                        <div id="textAndIcons">
                            <p id='comingSoonText'>Coming Soon
                            </p>
                        </div>
                        <div id="socialIcons">
                        <img value='twitter' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="twitIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/twitter_PNG15_ixivk3.png"/>
                            <img value='insta' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="instaIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/Instagram-icon-WHITE_qtg9uh.png"/>
                            <img value='mail' onMouseEnter={this.hoverOverImage} id="mailIcon" src="https://res.cloudinary.com/coool/image/upload/c_crop,co_rgb:2a2f47,e_colorize:100,h_920,w_1200/v1570050941/icons/584856b4e0bb315b0f7675ac_fqtcpf.png"/>
                                            
                                            
                        <Spring
                        from={{marginTop:-30}}
                        to={{marginTop:0}}
                        config={{delay:0, duration:100}}>
                        {props=>(
                            <div  style={props}>
                                <p id='mailText'>info@itscoool.com</p>

                            </div>
                        )}
                    </Spring>

                        </div>
                    </div>
                );
            }
        }
        
        else{
            return(
                <div id="comingSoonPage">
                    <img id="logo" class="comingSoonLogo" src={'https://res.cloudinary.com/coool/image/upload/v1569962834/Lava%20Shape%20GIF_Wide.gif'}/>
                    <div id="textAndIcons">
                        <p id='comingSoonText'>Coming Soon
                        </p>
                    </div>
                    <div id="socialIcons">
                        <img value='twitter' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="twitIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/twitter_PNG15_ixivk3.png"/>
                        <img value='insta' onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="instaIcon" src="https://res.cloudinary.com/coool/image/upload/v1570050941/icons/Instagram-icon-WHITE_qtg9uh.png"/>
                        <img  onMouseEnter={this.hoverOverImage} onMouseLeave={this.leaveImage} id="mailIcon" src="https://res.cloudinary.com/coool/image/upload/c_crop,h_920,w_1200/v1570050941/icons/584856b4e0bb315b0f7675ac_fqtcpf.png"/>
                    </div>
                </div>
            );
        }
    }
    
}



export default ComingSoon;