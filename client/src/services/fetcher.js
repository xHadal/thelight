const axios = require("axios");
const URL = "http://localhost:8202/api";
const api = {};

const fetcher = (fetchType, path, bodyRequest) => {
  console.log("params" + bodyRequest);
  const res = axios({
    method: fetchType,
    url: URL + path,
    responseType: "json",
    data: bodyRequest || null
  })
    .then(result => {
      console.log(result.data);
      return result.data;
    })
    .catch(error => {
      return error.request.status;
    });
  return res;
};

export default fetcher;
