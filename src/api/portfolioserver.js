let axios = require("axios");
let config = require("config.json");

let baseUrl = config.server_url;

//READ
export let fetchProfile = async () => {
  let response = await axios(baseUrl + "fetch/profile");
  return response.data;
};

export let fetchProject = async () => {
  let response = await axios(baseUrl + "fetch/project");

  let parsedData = [];

  try {
    response.data.forEach((data) => {
      parsedData.push({
        ...data,
        project_techstack: JSON.parse(data.project_techstack),
      });
    });
  } catch (e) {
    console.log("empty row");
  }

  return parsedData;
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

//UPDATE
export let updateProject = async (data) => {
  let { id, img_url, name, desc, tech_stack, link } = data;

  data = {
    project_id: id,
    project_imgurl: img_url,
    project_name: name,
    project_desc: desc,
    project_techstack: JSON.stringify(tech_stack),
    project_link: link,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/project",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
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
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/employment",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
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
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/education",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let updateSkill = async (data) => {
  let { id, name, proficiency, category } = data;

  data = {
    skill_id: id,
    skill_name: name,
    skill_proficiency: proficiency,
    skill_category_id: category,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  console.log(data);

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/skill",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let updateProfile = async (data) => {
  let {
    name,
    imgurl,
    title,
    age,
    phoneno,
    email,
    address,
    aboutme,
    aboutresume,
    resumeurl,
  } = data;

  data = {
    myprofile_name: name,
    myprofile_title: title,
    myprofile_age: age,
    myprofile_phoneno: phoneno,
    myprofile_email: email,
    myprofile_address: address,
    myprofile_aboutme: aboutme,
    myprofile_aboutresume: aboutresume,
    myprofile_resumeurl: resumeurl,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "update/profile",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

//DELETE
export let deleteProject = async (id) => {
  let sendData = new FormData();
  sendData.append(
    "data",
    JSON.stringify({
      project_id: id,
      authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
    })
  );

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/project",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let deleteEmployment = async (id) => {
  let sendData = new FormData();
  sendData.append(
    "data",
    JSON.stringify({
      employment_id: id,
      authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
    })
  );

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/employment",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let deleteEducation = async (id) => {
  let sendData = new FormData();
  sendData.append(
    "data",
    JSON.stringify({
      education_id: id,
      authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
    })
  );

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/education",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let deleteSkill = async (id) => {
  let sendData = new FormData();
  sendData.append(
    "data",
    JSON.stringify({
      skill_id: id,
      authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
    })
  );

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/skill",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

//ADD
export let addProject = async (data) => {
  let { name, desc, tech_stack, link } = data;

  data = {
    project_name: name,
    project_desc: desc,
    project_techstack: JSON.stringify(tech_stack),
    project_link: link,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/project",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let addEmployment = async (data) => {
  let { cert_url, desc, end_date, more_desc, place, position, start_date } =
    data;

  data = {
    employment_certurl: cert_url,
    employment_desc: desc,
    employment_place: place,
    employment_position: position,
    employment_xtradesc: more_desc,
    employment_startdate: start_date,
    employment_enddate: end_date,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/employment",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
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
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/education",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let addSkill = async (data) => {
  let { id, name, proficiency, category } = data;

  data = {
    skill_id: id,
    skill_name: name,
    skill_proficiency: proficiency,
    skill_category_id: category,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/skill",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  if (response.data.massage === "invalid token") window.location.reload();
  else return 0;
};

export let loginUser = async (data) => {
  data = {
    myprofile_email: data.email,
    myprofile_password: data.password,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "login",
    data: sendData,
  });

  sessionStorage.setItem("authkey-azriperisiben.me", response.data.authtoken);

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let checkLogin = async () => {
  let data = {
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "check/login",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "valid token") return 1;
  else return 0;
};

// THIS PART WILL NEED REFACTOR TO SUPPORT MORE IMAGE INSTEAD OF STATIC 3
export let addProjectImage = async (projid, id, data) => {
  let sendData = new FormData();
  sendData.append("imageFiles", data);
  sendData.append("projid", projid);
  sendData.append("id", id);

  let response = await axios({
    method: "post",
    url: baseUrl + "add/img",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  else return 0;
};

export let deleteProjectImage = async (projid, id) => {
  let data = {
    project_id: projid,
    img_id: id,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "delete/img",
    data: sendData,
  });

  if (response.data.massage === "Approved") return 1;
  else return 0;
};
