import fetcher from "./fetcher.js";
const api = {};

/* Get user by userID */
api.getUser = async bodyRequest => {
  return await fetcher("get", "/users", bodyRequest);
};

/* Post User by EMAIL */
api.postUser = async bodyRequest => {
  return await fetcher("post", "/users", bodyRequest);
};
/* Post User by EMAIL */
api.postUserAuth = async bodyRequest => {
  return await fetcher("post", "/users/auth", bodyRequest);
};

/* Get kids by userID */
api.getKids = async bodyRequest => {
  return await fetcher("get", "/users/" + bodyRequest + "/kids");
};

/* Post kid by userID*/
api.postKid = userId => {
  console.log(userId);
};
export default api;
