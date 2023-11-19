import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    assignments: [],
    assignment: { title: "New assignment", description: "New Description", dueDate: "", availableFromDate:"", availableUntilDate:""},
  };


  const assignmentsSlice = createSlice({
    name: "assingments",
    initialState,
    reducers: {

      setAssignments: (state, action) => {
          state.assignments = action.payload;
      },

      addAssignment: (state, action) => {
        state.assignments = [ ...state.assignments, action.payload ];
      },
      
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },

      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });


  export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;