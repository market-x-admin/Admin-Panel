import axios from "axios";
export const loginApi = (email, password) => {
  return axios.post("http://16.170.205.35:3000/api/auth/login", { email, password });
};
export const getTableDataSearch = () => {
  return axios.get("http://16.170.205.35:3000/api/read/Users");
};

export const getProperties = () => {
  return axios.get("http://16.170.205.35:3000/api/read/Properties");
};
export const GetReviews = (property_id) => {
  return axios.get(`http://16.170.205.35:3000/api/read/getAllRatings?property_id=${property_id}`);
};

export const deleteUser = (userId) => {
  return axios.delete(`http://16.170.205.35:3000/api/delete/user/${userId}`);
};
export const deleteProperties = (userId) => {
  return axios.delete(`http://16.170.205.35:3000/api/delete/Properties/${userId}`);
};
export const updateProperties = (userId) => {
  return axios.put(`http://16.170.205.35:3000/api/update/Properties/${userId}`);
};


export const addDataApi = (data) => {
  return axios.post("http://16.170.205.35:3000/api/write/Properties", data);
};

