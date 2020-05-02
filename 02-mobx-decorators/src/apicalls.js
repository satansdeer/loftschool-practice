
const APIURL = 'http://localhost:4000/courses/';

const axios = require('axios');

export const getCourses = () => axios.get(`${APIURL}/courses`);
export const addCourses = (data) => axios.post(`${APIURL}/courses`, data);
export const editCourses = (data) => axios.put(`${APIURL}/courses/${data.id}`, data);
export const deleteCourses = (id) => axios.delete(`${APIURL}/courses/${id}`);