import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`
const ASSIGNMENT_URL = `${API_BASE}/assignments`
 
export const getAssignments = async (courseID) => {

    const response = await axios.get(`${COURSES_URL}/${courseID}/assignments`);

    console.log("assingments in services: "+ response.data)
    return response.data;

};

export const createAssignment = async (courseID, newAssignment) => {

const response = await axios.post(`${COURSES_URL}/${courseID}/assignments`, newAssignment);
return response.data;

};

export const deleteAssignment = async (assignmentID) => {

    
    const response = await axios.delete(`${ASSIGNMENT_URL}/${assignmentID}`);
    return response.data;
}


export const updateAssignment = async (assignmentID, assign) => {

    const response = await axios.put(`${ASSIGNMENT_URL}/${assignmentID}`, assign); 
    return response.data;
}