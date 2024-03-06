import axios from "axios";
export const loginApi = (email, password) => {
  return axios.post("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/auth/login", { email, password });
};
export const getTableDataSearch = () => {
  return axios.get("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/read/Users");
};

export const getProperties = () => {
  return axios.get("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/read/Properties");
};
export const GetReviews = (property_id) => {
  return axios.get(`http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/read/getAllRatings?property_id=${property_id}`);
};

export const deleteUser = (userId) => {
  return axios.delete(`http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/delete/user/${userId}`);
};
export const deleteProperties = (userId) => {
  return axios.delete(`http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/delete/Properties/${userId}`);
};
export const updateProperties = (userId) => {
  return axios.put(`http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/update/Properties/${userId}`);
};


export const addDataApi = (data) => {
  return axios.post("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/write/Properties", data);
};

