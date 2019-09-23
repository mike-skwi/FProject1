import React from 'react';
import YearAndImages from './YearAndImages.jsx';

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeProject:"",
            hoveringOn:false
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

                 <li>
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
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"Project not yet released",
        trackTitle:"",
        staff:[
            "Directed by: coool",
            "Produced by: Lainey Muhlberg & Casey Lock",
            "1st AD: Phil Evans",
            "Dir. of Photography: David Hughes Jr", 
            "1st AC: Karena Amy",
            "DIT: Max Mooney",
            "Gaffer: Bryan Racine", 
            "Grips: Garrett Garcia & Mayank Mishra",
            "Production Designer: Chris Tuttle",
            "Wardrobe & Makeup: Casey Wood",
            "Art PA: Daemon Gonzalez",
            "SFX Makeup Artist: Jamie Leodones",
            "Editor: Max Mooney",
            "Colorist: Sam Howells",
            "VFX Artist: Ang Puglise",
            "Still Photography by: Garret Cabello",
            "PA: Logan Petitto, Brian Hedrick & Madolyn Rusen"
        ],
        released:false
    },

    {
        title: 'Nike x Off-White',
        trackTitle:"",
        video:'',
        year:'2019',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:[
            "Directed by: Jake Nokovic",
            "PA: Will Tooke"
        ],
        released:true
    },   
    
    {
        title: 'Fat Night',
        trackTitle:"Sweet Nothings",
        year:'2019',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'Dizzy Fae for Urban Outfitters',
        trackTitle:"",
        year:'2018',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'Spencer Radcliffe',
        trackTitle:"Here Comes the Snow",
        year:'2019',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'Kim Tee',
        trackTitle:"Too Deep",
        year:'2019',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:false
    },

    {
        title: 'Muerte\'s Death',
        trackTitle:"FW ‘18 Collection",
        year:'2018',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'LaCroix',
        trackTitle:"Crying",
        year:'2018',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'Katie Dey',
        trackTitle:"Dissolving",
        year:'2019',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'Space Gators',
        trackTitle:"Is it Right? Is it Wrong?",
        year:'2019',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'Tenci',
        trackTitle:"Serpent",
        year:'2018',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

    {
        title: 'REI',
        trackTitle:"Two of Us",
        year:'2018',
        images:[
            '',
            '',
            '',
            ''
        ],
        description:"",
        staff:"",
        released:true
    },

]

export default Projects;