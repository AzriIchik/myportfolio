/* DATA DEFINTION */
let homedata = {
  employmentdata: [],
  educationdata: [],
  skilldata: [],
  portfoliodata: [],
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
      if (action.payload.massage == "no row") return state;

      let newEmploymentData = [];
      action.payload.forEach((data) => {
        let {
          employment_certurl,
          employment_desc,
          employment_id,
          employment_place,
          employment_position,
          employment_xtradesc,
          employment_startdate,
          employment_enddate,
        } = data;

        newEmploymentData.push({
          id: employment_id,
          place: employment_place,
          position: employment_position,
          desc: employment_desc,
          more_desc: employment_xtradesc,
          cert_url: employment_certurl,
          start_date: employment_startdate,
          end_date: employment_enddate,
        });
      });

      newState = { ...state, employmentdata: newEmploymentData };
      return newState;

    case SET_EDUCATION:
      if (action.payload.massage == "no row") return state;

      let newEducationData = [];

      action.payload.forEach((data) => {
        let {
          education_certurl,
          education_desc,
          education_id,
          education_place,
          education_position,
          education_xtradesc,
          education_startdate,
          education_enddate,
        } = data;

        newEducationData.push({
          id: education_id,
          place: education_place,
          position: education_position,
          desc: education_desc,
          more_desc: education_xtradesc,
          cert_url: education_certurl,
          start_date: education_startdate,
          end_date: education_enddate,
        });
      });

      newState = { ...state, educationdata: newEducationData };
      return newState;

    case SET_SKILL:
      if (action.payload.massage == "no row") return state;
      let newSkillData = [];

      action.payload.forEach((data) => {
        let { skill_id, skill_name, skill_proficiency } = data;

        newSkillData.push({
          id: skill_id,
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
