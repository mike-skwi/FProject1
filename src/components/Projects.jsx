import React from 'react';

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
    }
    mouseEnter = (e) =>{
        this.setState({hoveringOn:true}, function () {
            console.log(this.state.hoveringOn);
        });
        console.log("in")
    }

    mouseMove = (e) =>{
        this.setState({hoveringOn:true}, function () {
            console.log(this.state.hoveringOn);
        });
        console.log("moving")

    }

    mouseExit = (e) =>{
        this.setState({hoveringOn:false}, function () {
            console.log(this.state.hoveringOn);
        });
        console.log("out")
    }

    render(){
        return(
            <div class="Projects"> 
                {projectObject.map((project)=>
                 <li>
                 <a 
                    // {/// get getdatavalue from a prop}
                    onClick={this.getDataValue } data-value="11111111">
                <div
                    onMouseEnter={this.mouseEnter}
                    onMouseLeave={this.mouseExit}
                    onMouseMove={this.mouseMove}                
                    class="title">
                    {project.title}
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