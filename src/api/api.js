import axios from "axios";
export const loginApi = (email, password) => {
  return axios.post("https://api.marketx.site/api/auth/login", { email, password });
};
export const getTableDataSearch = () => {
  return axios.get("https://api.marketx.site/api/read/Users");
};

export const getProperties = () => {
  return axios.get("https://api.marketx.site/api/read/Properties");
};
export const GetReviews = (property_id) => {
  return axios.get(`https://api.marketx.site/api/read/getAllRatings?property_id=${property_id}`);
};

export const deleteUser = (userId) => {
  return axios.delete(`https://api.marketx.site/api/delete/user/${userId}`);
};
export const deleteProperties = (userId) => {
  return axios.delete(`https://api.marketx.site/api/delete/Properties/${userId}`);
};
export const updateProperties = (userId) => {
  return axios.put(`https://api.marketx.site/api/update/Properties/${userId}`);
};


export const addDataApi = (data) => {
  return axios.post("https://api.marketx.site/api/write/Properties", data);
};

