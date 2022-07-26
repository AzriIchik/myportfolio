/* DATA DEFINTION */
let homedata = {
  employmentdata: [
    {
      place: "",
      year: "",
      position: "",
      desc: "",
      more_desc: "",
      cert_url: "",
    },
  ],
  educationdata: [
    {
      place: "",
      year: "",
      position: "",
      desc: "",
      more_desc: "",
      cert_url: "",
    },
  ],
  skilldata: [
    {
      name: "",
      proficiency: 0,
    },
  ],
  portfoliodata: [
    {
      id: 0,
      img_url: "",
      name: "",
      desc: "",
      tech_stack: [],
      link: "",
    },
  ],
};

// ACTION LIST
let SET_PROJECT = "SET_PROJECT";
let SET_EMPLOYMENT = "SET_EMPLOYMENT";
let SET_EDUCATION = "SET_EDUCATION";
let SET_SKILL = "SET_SKILL";

let homeAction = {
  SET_PROJECT,
  SET_EMPLOYMENT,
  SET_EDUCATION,
  SET_SKILL,
};

let reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case SET_PROJECT:
      let newPortfolioData = [];

      action.payload.forEach((data) => {
        let {
          project_desc,
          project_id,
          project_imgurl,
          project_name,
          project_techstack,
          project_link,
        } = data;

        newPortfolioData.push({
          id: project_id,
          img_url: project_imgurl,
          name: project_name,
          desc: project_desc,
          tech_stack: JSON.parse(project_techstack),
          link: project_link,
        });
      });

      newState = { ...state, portfoliodata: newPortfolioData };
      return newState;

    case SET_EMPLOYMENT:
      let newEmploymentData = [];

      action.payload.forEach((data) => {
        let {
          employment_certurl,
          employment_desc,
          employment_id,
          employment_place,
          employment_position,
          employment_xtradesc,
          employment_year,
        } = data;

        newEmploymentData.push({
          place: employment_place,
          year: employment_year,
          position: employment_position,
          desc: employment_desc,
          more_desc: employment_xtradesc,
          cert_url: employment_certurl,
        });
      });

      newState = { ...state, employmentdata: newEmploymentData };
      return newState;

    case SET_EDUCATION:
      let newEducationData = [];

      action.payload.forEach((data) => {
        let {
          education_certurl,
          education_desc,
          education_id,
          education_place,
          education_position,
          education_xtradesc,
          education_year,
        } = data;

        newEducationData.push({
          place: education_place,
          year: education_year,
          position: education_position,
          desc: education_desc,
          more_desc: education_xtradesc,
          cert_url: education_certurl,
        });
      });

      newState = { ...state, educationdata: newEducationData };
      return newState;

    case SET_SKILL:
      let newSkillData = [];

      action.payload.forEach((data) => {
        let { skill_id, skill_name, skill_proficiency } = data;

        newSkillData.push({
          name: skill_name,
          proficiency: skill_proficiency,
        });
      });

      newState = { ...state, skilldata: newSkillData };

      return newState;

    default:
      console.log("ERROR TYPE");
      return;
  }
};

export let homeReducer = {
  state: homedata,
  reducer: reducer,
  action: homeAction,
};
