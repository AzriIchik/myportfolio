let axios = require("axios");
let config = require("config.json");

let baseUrl = config.server_url;

export let sendLetter = async (data) => {
  let { name, phoneno, textenquire } = data;

  data = {
    letter_name: name,
    letter_phone: phoneno,
    letter_textenquire: textenquire,
  };

  let sendData = new FormData();
  sendData.append("data", JSON.stringify(data));

  let response = await axios({
    method: "post",
    url: baseUrl + "add/letter",
    data: sendData,
  });

  console.log(response);

  if (response.data.massage === "Approved") return 1;
  else return 0;
};
