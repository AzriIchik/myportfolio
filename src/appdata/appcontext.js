import React from "react";

/* DATA DEFINTION */
let appdata = {
  employmentdata: [],
  educationdata: [],
  skilldata: [],
  portfoliodata: [],
  employmentformdata: {
    id: 0,
    cert_url: "",
    desc: "",
    place: "",
    position: "",
    more_desc: "",
    start_date: "",
    end_date: "",
  },
  educationformdata: {
    id: 0,
    cert_url: "",
    desc: "",
    place: "",
    position: "",
    more_desc: "",
    start_date: "",
    end_date: "",
  },
  skillformdata: {
    id: 0,
    name: "",
    proficiency: 1,
  },
};

// ACTION LIST
let SET_PROJECT = "SET_PROJECT";
let SET_EMPLOYMENT = "SET_EMPLOYMENT";
let SET_EDUCATION = "SET_EDUCATION";
let SET_SKILL = "SET_SKILL";
let SET_EDUCATION_FORM = "SET_EDUCATION_FORM";
let SET_EMPLOYMENT_FORM = "SET_EMPLOYMENT_FORM";
let SET_SKILL_FORM = "SET_SKILL_FORM";

let action = {
  SET_PROJECT,
  SET_EMPLOYMENT,
  SET_EDUCATION,
  SET_SKILL,
  SET_EDUCATION_FORM,
  SET_EMPLOYMENT_FORM,
  SET_SKILL_FORM,
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
      if (action.payload.massage === "no row")
        return { ...state, employmentdata: [] };

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
      if (action.payload.massage === "no row")
        return { ...state, educationdata: [] };

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
      if (action.payload.massage === "no row")
        return { ...state, skilldata: [] };
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

    case SET_EDUCATION_FORM:
      if (action.payload === undefined) return state;

      newState = {
        ...state,
        educationformdata: {
          id: action.payload.id,
          cert_url: action.payload.cert_url,
          desc: action.payload.desc,
          place: action.payload.place,
          position: action.payload.position,
          more_desc: action.payload.more_desc,
          start_date: action.payload.start_date,
          end_date: action.payload.end_date,
        },
      };

      return newState;

    case SET_EMPLOYMENT_FORM:
      if (action.payload === undefined) return state;

      newState = {
        ...state,
        employmentformdata: {
          id: action.payload.id,
          cert_url: action.payload.cert_url,
          desc: action.payload.desc,
          place: action.payload.place,
          position: action.payload.position,
          more_desc: action.payload.more_desc,
          start_date: action.payload.start_date,
          end_date: action.payload.end_date,
        },
      };

      return newState;

    case SET_SKILL_FORM:
      if (action.payload === undefined) return state;

      newState = {
        ...state,
        skillformdata: {
          id: action.payload.id,
          name: action.payload.name,
          proficiency: action.payload.proficiency,
        },
      };

      return newState;

    default:
      console.log("ERROR TYPE");
      return;
  }
};

export let appReducer = {
  state: appdata,
  reducer,
  action,
};

export let AppContext = React.createContext();
