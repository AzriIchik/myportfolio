import React from "react";

export let Appdata = {
    
    employmentdata: { 
        data: [
            {
                place: "Finexus Sdn Bhd",
                year:"2002 - 2022",
                position:"Software Engineer",
                desc: "A fintech Company at KL, with goal of want to be the best digital financial solution",
                more_desc: "More data and description More data and descriptionMore data and descriptionMore data and descriptionMore data and descriptionMore data and descriptionMore data and descriptionMore data and descriptionMore data and descriptionMore data and descriptionMore data and description",
                cert_url: "https://drive.google.com/u/2/uc?id=1OxiSQF-fYH_MP2k4nVRiE0SN0Nh3SV22&export=download"
            }
        ]
    },
    educationdata:{
        data:[
            {
                place:"UNIVERSITI PENDIDKAN SULTAN IDRIS",
                year:"2016 - 2020",
                position:"Bachelor of Software Engineering (Education Software)",
                desc:"I study Software Engineering lol",
                more_desc: "What I study",
                cert_url: "https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window"
            }
        ]
    },
    skillsdata:{
        data:[
            {
                name:"HTML/CSS",
                proficiency: 5
            },
            {
                name:"Javascript",
                proficiency: 5
            },
            {
                name:"C",
                proficiency: 4
            }
        ]
    },
    portfoliodata:{
        data: [
            {
                img_url:"https://previews.aspirity.com/spirit/assets/img/img_project_2_mono.png",
                name: "My Project",
                desc: "Project Desc",
                tech_stack: ["Stack"]
            }
        ]
    }
}

export let AppContext = React.createContext()