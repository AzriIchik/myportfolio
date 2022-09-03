let axios = require("axios");
let config = require("config.json");

let baseUrl = config.server_url;

export let fetchProject = async () => {
  let response = await axios(baseUrl + "fetch/project");
  return response.data;
};

export let fetchEmployment = async () => {
  let response = await axios(baseUrl + "fetch/employment");
  return response.data;
};

export let fetchEducation = async () => {
  let response = await axios(baseUrl + "fetch/education");
  return response.data;
};

export let fetchSkill = async () => {
  let response = await axios(baseUrl + "fetch/skill");
  return response.data;
};

export let updateEmployment = async (data) => {
  let { cert_url, desc, end_date, id, more_desc, place, position, start_date } =
    data;

  data = {
    employment_certurl: cert_url,
    employment_desc: desc,
    employment_id: id,
    employment_place: place,
    employment_position: position,
    employment_xtradesc: more_desc,
    employment_startdate: start_date,
    employment_enddate: end_date,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/employment",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let updateEducation = async (data) => {
  let { cert_url, desc, end_date, id, more_desc, place, position, start_date } =
    data;

  data = {
    education_certurl: cert_url,
    education_desc: desc,
    education_id: id,
    education_place: place,
    education_position: position,
    education_xtradesc: more_desc,
    education_startdate: start_date,
    education_enddate: end_date,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/education",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let updateSkill = async (data) => {
  let { id, name, proficiency } = data;

  data = {
    skill_id: id,
    skill_name: name,
    skill_proficiency: proficiency,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/skill",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let deleteEmployment = async (id) => {
  let sendData = new FormData();
  sendData.append("data", JSON.stringify({ employment_id: id }));

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/employment",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let deleteEducation = async (id) => {
  let sendData = new FormData();
  sendData.append("data", JSON.stringify({ education_id: id }));

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/education",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let deleteSkill = async (id) => {
  let sendData = new FormData();
  sendData.append("data", JSON.stringify({ skill_id: id }));

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/skill",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let addEmployment = async (data) => {
  let { cert_url, desc, end_date, more_desc, place, position, start_date } =
    data;

  console.log(data);

  data = {
    employment_certurl: cert_url,
    employment_desc: desc,
    employment_place: place,
    employment_position: position,
    employment_xtradesc: more_desc,
    employment_startdate: start_date,
    employment_enddate: end_date,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/employment",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let addEducation = async (data) => {
  let { cert_url, desc, end_date, more_desc, place, position, start_date } =
    data;

  console.log(data);

  data = {
    education_certurl: cert_url,
    education_desc: desc,
    education_place: place,
    education_position: position,
    education_xtradesc: more_desc,
    education_startdate: start_date,
    education_enddate: end_date,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/education",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let addSkill = async (data) => {
  let { id, name, proficiency } = data;

  data = {
    skill_id: id,
    skill_name: name,
    skill_proficiency: proficiency,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/skill",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  else return 0;
};
