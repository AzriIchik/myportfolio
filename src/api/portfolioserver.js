import axios from "axios";

const qs = require("qs");
//const axios = require("axios");
const config = require("config.json");
const baseUrl = config.server_url;

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {}
);

axios.interceptors.request.use(
  (config) => {
    const methodAuthCheck = ["post", "put", "delete"];

    //skip for login
    if (baseUrl + "login" === config.url) return config;

    if (methodAuthCheck.includes(config.method)) {
      config.headers.Authorization = `token ${sessionStorage.getItem(
        "authkey-azriperisiben.me"
      )}`;
    }

    return config;
  },
  (error) => {}
);

//READ
export let fetchProfile = async () => {
  let response = await axios(baseUrl + "profile");
  return response.data;
};

export let fetchProject = async () => {
  let response = await axios(baseUrl + "project");
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
  let response = await axios(baseUrl + "employment");
  return response.data;
};

export let fetchEducation = async () => {
  let response = await axios(baseUrl + "education");
  return response.data;
};

export let fetchSkill = async () => {
  let response = await axios(baseUrl + "skill");
  return response.data;
};

//UPDATE
export let updateProject = async (data) => {
  let { id, name, desc, tech_stack, link } = data;

  data = qs.stringify({
    name,
    desc,
    techstack: JSON.stringify(tech_stack),
    link,
  });

  let response = await axios({
    method: "put",
    maxBodyLength: Infinity,
    url: baseUrl + `project/${id}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let updateEmployment = async (data) => {
  let { cert_url, desc, end_date, id, more_desc, place, position, start_date } =
    data;

  data = qs.stringify({
    certurl: cert_url,
    desc,
    place,
    position,
    xtradesc: more_desc,
    startdate: start_date,
    enddate: end_date,
  });

  let response = await axios({
    method: "put",
    url: baseUrl + `employment/${id}`,
    data,
  });

  console.log(response);

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let updateEducation = async (data) => {
  let { cert_url, desc, end_date, id, more_desc, place, position, start_date } =
    data;

  data = qs.stringify({
    certurl: cert_url,
    desc,
    place,
    position,
    xtradesc: more_desc,
    startdate: start_date,
    enddate: end_date,
  });

  let response = await axios({
    method: "put",
    url: baseUrl + `education/${id}`,
    data,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let updateSkill = async (data) => {
  let { id, name, proficiency, category } = data;

  data = qs.stringify({
    name,
    proficiency,
    category,
  });

  let response = await axios({
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}skill/${id}`,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    data,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let updateProfile = async (data) => {
  let {
    name,
    title,
    age,
    phoneno,
    email,
    address,
    aboutme,
    aboutresume,
    resumeurl,
  } = data;

  data = qs.stringify({
    name,
    aboutme,
    aboutresume,
    address,
    age,
    email,
    phoneno,
    title,
    resumeurl,
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  });

  let response = await axios({
    method: "put",
    url: baseUrl + "profile",
    data,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

//DELETE
export let deleteProject = async (id) => {
  let response = await axios({
    method: "delete",
    url: `${baseUrl}project/${id}`,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let deleteEmployment = async (id) => {
  let response = await axios({
    method: "delete",
    url: baseUrl + `employment/${id}`,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let deleteEducation = async (id) => {
  let response = await axios({
    method: "delete",
    url: baseUrl + `education/${id}`,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let deleteSkill = async (id) => {
  let response = await axios({
    method: "delete",
    url: `${baseUrl}skill/${id}`,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

//ADD
export let addProject = async (data) => {
  let { name, desc, tech_stack, link } = data;

  let formData = new FormData();
  formData.append("name", name);
  formData.append("desc", desc);
  formData.append("techstack", JSON.stringify(tech_stack));
  formData.append("link", link);
  formData.append(
    "authtoken",
    sessionStorage.getItem("authkey-azriperisiben.me")
  );

  let response = await axios({
    method: "post",
    url: baseUrl + "project",
    data: formData,
    headers: {
      Authorization: `Basic ${sessionStorage.getItem(
        "authkey-azriperisiben.me"
      )}`,
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let addEmployment = async (data) => {
  let { cert_url, desc, end_date, more_desc, place, position, start_date } =
    data;

  let formData = new FormData();
  formData.append("certurl", cert_url);
  formData.append("desc", desc);
  formData.append("place", place);
  formData.append("position", position);
  formData.append("xtradesc", more_desc);
  formData.append("startdate", start_date);
  formData.append("enddate", end_date);

  let response = await axios({
    method: "post",
    headers: {
      Authorization: `Basic ${sessionStorage.getItem(
        "authkey-azriperisiben.me"
      )}`,
    },
    url: baseUrl + "employment",
    data: formData,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let addEducation = async (data) => {
  let { cert_url, desc, end_date, more_desc, place, position, start_date } =
    data;

  let sendData = new FormData();
  sendData.append("certurl", cert_url);
  sendData.append("desc", desc);
  sendData.append("place", place);
  sendData.append("position", position);
  sendData.append("xtradesc", more_desc);
  sendData.append("startdate", start_date);
  sendData.append("enddate", end_date);

  let response = await axios({
    method: "post",
    url: baseUrl + "education",
    data: sendData,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let addSkill = async (data) => {
  let { name, proficiency, category } = data;

  let formData = new FormData();
  formData.append("name", name);
  formData.append("proficiency", proficiency);
  formData.append("category", category);

  let response = await axios({
    method: "post",
    url: baseUrl + "skill",
    data: formData,
  });

  if (response.data.message === "approved") return 1;
  if (response.data.message === "invalid token") window.location.reload();
  else return 0;
};

export let loginUser = async (data) => {
  data = {
    myprofile_email: data ? data.email : " ",
    myprofile_password: data ? data.password : " ",
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "login",
    data: sendData,
  });

  if (response.data.message === "approved") {
    sessionStorage.setItem("authkey-azriperisiben.me", response.data.authtoken);
    return 1;
  } else if (response.data.message === "valid token") {
    return 1;
  } else {
    return 0;
  }
};

export let checkLogin = async () => {
  let data = {
    authtoken: sessionStorage.getItem("authkey-azriperisiben.me"),
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "",
    data: sendData,
  });

  if (response.data.message === "valid token") return 1;
  else return 0;
};

// THIS PART WILL NEED REFACTOR TO SUPPORT MORE IMAGE INSTEAD OF STATIC 3
export let addProjectImage = async (projid, imgid, imgfile) => {
  let sendData = new FormData();
  sendData.append("imageFiles", imgfile);
  sendData.append("projid", projid);

  let response = await axios({
    method: "post",
    url: baseUrl + `projectimg/${imgid}`,
    data: sendData,
  });

  if (response.data.message === "approved") return 1;
  else return 0;
};

export let addProfileImage = async (imgfile) => {
  let sendData = new FormData();
  sendData.append("imageFiles", imgfile);

  let response = await axios({
    method: "post",
    url: baseUrl + `profileimg`,
    data: sendData,
  });

  if (response.data.message === "approved") return 1;
  else return 0;
};

export let deleteProjectImage = async (id, imgid) => {
  let response = await axios({
    method: "delete",
    url: baseUrl + `projectimg/${id}/${imgid}`,
  });

  if (response.data.message === "approved") return 1;
  else return 0;
};
