import React from 'react';
import YearAndImages from './YearAndImages.jsx';

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeProject:"",
            hoveringOn:false,
            pictureOn:true
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseExit = this.mouseExit.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (value) =>{
        // send project object up 
        console.log(value)
        this.props.setNewPage(value)
        // this.props.goTo(value)
    }

    mouseEnter = (e) =>{
        this.setState({hoveringOn:true}, function () {
            // console.log(this.state.hoveringOn);
        });

        this.setState({activeProject:e.target.innerText}, function () {
            console.log(this.state.activeProject)
        });
    }

    mouseMove = (e) =>{
        this.setState({hoveringOn:true}, function () {
            console.log(this.state.hoveringOn);
            console.log(this.state.activeProject)
            console.log(this.state.activeProject.year)
        });
        this.setState({activeProject:e.target.innerText}, function () {
            console.log(this.state.activeProject)
        });

        // animate here

    }

    mouseExit = (e) =>{
        this.setState({hoveringOn:false}, function () {

        });
        this.setState({activeProject:"none"}, function () {
            
        });
    }

    render(){
        return(
            <div class="Projects"> 
                {projectObject.map((project, id)=>

                 <li >
                 <a 
                    // {/// get getdatavalue from a prop}
                    data_value={project}
                    >
                <div
                    key={id}
                    onClick={() => this.handleClick(project) }

                    onMouseEnter={this.mouseEnter}
                    onMouseLeave={this.mouseExit}
                    //onMouseMove={this.mouseMove}                
                    className={"title"}
                     >
                    
                    {project.title}
                
                    <YearAndImages
                    
                        xCoords={this.props.xCoords}
                        yCoords={this.props.yCoords}        
                        //visible={this.state.hoveringOn}

                        img1={project.image1}
                        img2={project.image2}
                        img3={project.image3}
                        img4={project.image4}

                        projectName={project.title}
                        activeProject={this.state.activeProject}
                        year={project.year} 
                        images={"a"}/>
                    {/* Set a style here <p style={}> */}
                    {/* <p>{project.year}</p> */}
                </div>
                </a>
             </li>   
       
                    )}
                
            </div>
        );
    }

    
}

const projectObject = [ 

    {
        title: 'Ratboys',
        trackTitle:'Alien With a Sleepmask On',
        year:'2019',
        video:'',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569621792/ratboys/AWSMO_Mockup_v01_qisogd.png',
        image2:'',
        image3:'',
        image4:'',
        description:"Project not yet released",
        trackTitle:"",
        staff:[
            "Directed by: coool ",
            "Produced by: Lainey Muhlberg & Casey Lock ",
            "1st AD: Phil Evans ",
            "Dir. of Photography: David Hughes Jr ", 
            "1st AC: Karena Amy ",
            "DIT: Max Mooney ",
            "Gaffer: Bryan Racine ", 
            "Grips: Garrett Garcia & Mayank Mishra ",
            "Production Designer: Chris Tuttle ",
            "Wardrobe & Makeup: Casey Wood ",
            "Art PA: Daemon Gonzalez ",
            "SFX Makeup Artist: Jamie Leodones ",
            "Editor: Max Mooney ",
            "Colorist: Sam Howells ",
            "VFX Artist: Ang Puglise ",
            "Still Photography by: Garret Cabello ",
            "PA: Logan Petitto, Brian Hedrick & Madolyn Rusen "
        ],
        released:false
    },

    {
        title: 'Nike x Off-White',
        trackTitle:"",
        video:'',
        year:'2019',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569621897/nike%20x%20off%20white/31481ffc8be47e75_mi1jz8.png',
        image2:'',
        image3:'',
        image4:'',
        description:"Product video for Piff clothing store in Minneapolis, MN showcasing the Nike x Off-White collab sneaker.",
        staff:[
            "Directed by: Jake Nokovic",
            "PA: Will Tooke"
        ],
        released:true
    },   
    
    {
        title: 'Fat Night',
        trackTitle:"Sweet Nothings",
        video:'https://player.vimeo.com/video/362909494',
        year:'2019',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569596075/fat%20night/34_ksiwgz.tiff',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569596075/fat%20night/67_lhwpk4.tiff',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569596075/fat%20night/27_dvwc9o.tiff',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569596075/fat%20night/37_yl83t7.tiff',
        description:"",
        staff:[
            'Directed & Produced by: John TerEick ',
            '1st AD: Tayler Robinson ',
            'Dir. of Photography: Jake Brusha ',
            '1st AC: Igor Cedeno ',
            'Gaffer: Josh Binder ',
            'PA: Katie Samuelsen & Emma Kupor ',
            'Choreography: Christina Reis ',
            'Dancers: Christina Reis & Katherine Stewart ',
            'Venue lighting: Maya Bauman ',
            'Editor: John TerEick ',
            'Colorist: Sam Howells ',
            'Thanks: Rachel Lee, Sleeping Village, & Hunter Korgel '
        ],
        released:true
    },

    {
        title: 'Dizzy Fae for Urban Outfitters',
        trackTitle:"",
        video:'',
        year:'2018',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569622484/dizzy_urban/Screen_Shot_2019-09-09_at_3.07.27_PM_qvwht7.png',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569622484/dizzy_urban/Screen_Shot_2019-09-27_at_5.08.22_PM_p2w2z8.png',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569622484/dizzy_urban/Screen_Shot_2019-09-09_at_3.05.50_PM_qrchjy.png',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569622484/dizzy_urban/Screen_Shot_2019-09-09_at_3.06.16_PM_zdjafs.png',
        description:"",
        staff:[
            'Directed by: Jake Nokovic ',
            'PA: Brendan Lauer & Hannah Germaine'
        ],
        released:true
    },

    {
        title: 'Spencer Radcliffe',
        trackTitle:"Here Comes the Snow",
        video:'https://player.vimeo.com/video/362909405',
        year:'2019',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569622925/spencer%20radcliffe/24_lsk9zf.jpg',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569622926/spencer%20radcliffe/14_vxgp7m.jpg',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569622925/spencer%20radcliffe/12_wchuhq.jpg',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569622925/spencer%20radcliffe/3_oor8b6.jpg',
        description:"",
        staff:[
            'Directed by: Dakota Sillyman & John TerEick ',
            '1st AD: Ash Thompson ',
            'Production Manager: Nick Barone ',
            'Dir. of Photography: Dan Frantz ',
            '1st AC: Nichole Harmon ',
            'Gaffer & Grip: JT Klingenmeier & Jeremy Freedberg ',
            'Production Designer: Mitch Ransdell ',
            'Wardobe/Art/Set Dec: Greta White ',
            'PA: Katie Samuelsen, Jimmy Sisto, Carly Harrison, Myra Rivera & Abbie Brasch ',
            'Editor: John TerEick ',
            'Color: The Mill Chicago ',
            'Colorist: Lindsey Mazur ',
            'Color Producer: Dan Butler ',
            'Sound: Noisefloor LTD. ',
            'Sound Designer & Mixer: A.J. Olstad ',
            'Art Director: Brian Hedrick ',
            'Band: Spencer Radcliffe, Tina Scarpello, Grant Engstrom, Jack Schenenauer ',
            'Cast: Jimmy Sisto, Jess Shoman, Courtney Coleman, ',
            'Spencer Labute, Kate Sierzputowski, Caroline Walp, Kathryn Wilson & Elizabeth Smarz ',
            'Thanks: Spyners Pub, Maureen Sullivan'
        ],
        released:true
    },

    {
        title: 'Kim Tee',
        trackTitle:"Too Deep",
        video:'https://player.vimeo.com/video/',
        year:'2019',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569624024/kimtee/000131_bntulb.png',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569624024/kimtee/000081_y4so1d.png',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569624024/kimtee/000071_lls4hb.png',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569624024/kimtee/000101_g5vzrh.png',
        description:"",
        staff:[
            'Directed by: Jake Nokovic ',
            'Produced by: Lucas Anderson ',
            'Dir. of Photography: Spencer Nelson ',
            'Camera Assist: Christain Spraungel ',
            'Production Designer: Francine Thompson ',
            'Gaffer: Owne Seaton ',
            'Editor: Jake Nokovic ',
            'PA: Will Tooke'
        ],
        released:false
    },

    {
        title: 'Muerte\'s Death',
        trackTitle:"FW ‘18 Collection",
        video:'https://player.vimeo.com/video/362910525',
        year:'2018',
        image1:'',
        image2:'',
        image3:'',
        image4:'',
        description:"Release video for the Fall/Winter 2018 Collection from Muerte’s Death.",
        staff:[
            'Directed by: coool ',
            'Dir. of Photography: Jake Brusha ',
            'Producer: Donny ',
            'Colourist: @jalob at @mill_chi ',
            'Colour Producer: @lauriea & @danjbutler ',
            'Sound Design: @_ethan_houser ',
            'Music: @__amati__ ',
            'Editor: Jake Nokovic ',
            'Graphics: John TerEick ',
            'Copy: @katiesamuelsen ',
            'Camera Assist: @hsgermaine ',
            'Key Grip: @brendanlauer ',
            'PA: @logicofanthony & @_ethan_houser ',
            'Narration: @koldkral & @carlosmontoya__ ',
            '- ',
            'Models: @patyvomit @diorglory @koldkral @fuckyouliko @snoozemami @maraki.girma @forget_ellie @justinoforiatta @simplynautica @moryroto @marquesisdead @dr.draco @oh_dessia @jaydajetski @seekayck @lovayrose @freealan_ @dotnny ',
            '- ',
            '@muertesdeath ',

        ],
        released:true
    },

    {
        title: 'LaCroix',
        trackTitle:"Crying",
        video:'https://player.vimeo.com/video/362910551',
        year:'2018',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569622459/la%20croix/1A_t41sur.png',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569622420/la%20croix/1B_qvjxxn.png',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569622420/la%20croix/2B_dpvnls.png',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569622420/la%20croix/2A_tz49zq.png',
        description:"La Croix brings contentment to three strangers who are all crying.",
        staff:[
            'Directed by: coool ',
            'Cinematographer: joe mcnairy ',
            'Art director: kayleigh o\'brien ',
            'Copywriter: bobby kuhn ',
            'Colourist: lindsey mazur ',
            'Digital intermediate: the mill chicago ',
            'Animator: carolina lopez ',
            'Thanks to: cinequipt, greenhouse ',
        ],
        released:true
    },

    {
        title: 'Katie Dey',
        trackTitle:"Dissolving",
        video:'https://player.vimeo.com/video/362909425',
        year:'2019',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569623039/katie%20dey/8_dod666.jpg',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569622999/katie%20dey/4_rt8c9s.png',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569622998/katie%20dey/6_alvzit.png',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569622998/katie%20dey/3_v0eq9u.png',
        description:"",
        staff:[
            'Directed by: John TerEick and Dakota Sillyman ',
            '1st AD: Tayler Robinson ',
            'Producer: Lainey Muhlberg ',
            'Director of Photography: David Hughes Jr ',
            '1st AC: Nichole Harmon ',
            'Production Designer: Chris Tuttle ',
            'Wardrobe, Hair and Makeup: Greta White ',
            'Production Assistant: Mikey Castillo ',
            'Starring: Ashley Thompson ',
            'Editor: John TerEick ',
            'Color: The Mill Chicago ',
            'Colorist: Lindsey Mazur ',
            'VFX: Anj Puglise ',
            'Title design: Brian Hedrick ',
            'Sound FX Provided by: Migell2 ',
            'Thanks: Ashley Hutchison, Brad Hutchison, Tereasa Surratt, David Hernandez, Camp Wandawega, Spencer Radcliffe, Jay Noir, Jorie Landfear '
        ],
        released:true
    },

    {
        title: 'Space Gators',
        trackTitle:"Is it Right? Is it Wrong?",
        video:'https://player.vimeo.com/video/362909383',
        year:'2019',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569623275/space%20gators/5_y3mpjv.png',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569623274/space%20gators/30_e4bmfn.jpg',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569623275/space%20gators/49_ypn3tz.jpg',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569623274/space%20gators/1_nvcbny.jpg',
        description:"A young man discovers himself as he explores life outside the bubble of his football team.",
        staff:[
            'Directed by: coool ',
            'Director of Photography: Jake Brusha ',
            'Editor: John TerEick ',
            'Colorist: Jacob McKee @ The Mill Chicago ',
            'Talent: Jon Levert ',
            'AC: Hannah Germaine ',
            'Gaffer / Grip: JT Klingenmeier ',
            'Production Assistants: ',
            'Editor: John TerEick ',
            'Color: The Mill Chicago ',
            'Colorist: Jacob McKee ',
            'Color Producer: Dan Butler ',
            'Sound Designer & Mixer: Ryan Deffet ',
            'Art Director: Brian Hedrick ',
            'Animation: Jason Noir ',
            'Talent: Jon Levert ',
            'Gators: Ryan Deffet, Adam Karstens, ',
            'Thanks: Marco Morales, Spyners Pub, Mike Brewer '
        ],
        released:true
    },

    {
        title: 'Tenci',
        trackTitle:"Serpent",
        video:'https://player.vimeo.com/video/362913203',
        year:'2018',
        image1:'https://res.cloudinary.com/coool/image/upload/v1569621665/tenci/44_fs0ajt.png',
        image2:'https://res.cloudinary.com/coool/image/upload/v1569621664/tenci/74_y0gb7v.png',
        image3:'https://res.cloudinary.com/coool/image/upload/v1569621664/tenci/39_cj8p9b.png',
        image4:'https://res.cloudinary.com/coool/image/upload/v1569621664/tenci/35_wdzu62.png',
        description:"The debut music video for Tenci. Shot in and around Los Angeles.",
        staff:[
            'Directed and Edited by: John TerEick ',
            'Director of Photography: Ariel Pomerantz ',
            'Thanks: Tina Scarpello, Danny Kutnink, Belle\'s Bagels, The City of Angels, Alex Pomerantz '
        ],
        released:true
    },

    {
        title: 'REI',
        trackTitle:"Two of Us",
        video:'https://player.vimeo.com/video/362909701',
        year:'2018',
        image1:'',
        image2:'',
        image3:'',
        image4:'',
        description:"A young man revisits a campsite he remembers from his youth.",
        staff:[
            'Directed by: John Tereick and Jake Nokovič ',
            'Director of Photography: Joe Mcnairy ',
            'AC, grip/gaf: Spencer Nelson ',
            'Sound Design / mix: A.J. Olstad ',
            'Color: Lindsey Mazur ',
            'Thanks to: Matthew Berglund, Cinequipt, Pixel Farm, Noisefloor, The Tomas Family'
        ],
        released:true
    },

]

export default Projects;