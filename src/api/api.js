import axios from "axios";
export const loginApi = (email, password) => {
  return axios.post("https://5hwtmvdt-8080.inc1.devtunnels.ms/api/auth/login", { email, password });
};
export const getTableDataSearch = () => {
  return axios.get("https://5hwtmvdt-8080.inc1.devtunnels.ms/api/read/Users");
};

export const getProperties = () => {
  return axios.get("https://5hwtmvdt-8080.inc1.devtunnels.ms/api/read/Properties");
};
export const GetReviews = (property_id) => {
  return axios.get(`https://5hwtmvdt-8080.inc1.devtunnels.ms/api/read/getAllRatings?property_id=${property_id}`);
};

export const deleteUser = (userId) => {
  return axios.delete(`https://5hwtmvdt-8080.inc1.devtunnels.ms/api/delete/user/${userId}`);
};
export const deleteProperties = (userId) => {
  return axios.delete(`https://5hwtmvdt-8080.inc1.devtunnels.ms/api/delete/Properties/${userId}`);
};
export const updateProperties = (userId) => {
  return axios.put(`https://5hwtmvdt-8080.inc1.devtunnels.ms/api/update/Properties/${userId}`);
};


export const addDataApi = (data) => {
  return axios.post("https://5hwtmvdt-8080.inc1.devtunnels.ms/api/write/Properties", data);
};

