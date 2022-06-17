import axios from "axios";
import { batch } from "react-redux";

export const todosActions = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
};

// action creators
export const getTodoRequest = () => ({
  type: todosActions.GET_TODO_REQUEST
});

export const getTodoSuccess = (data) => ({
  type: todosActions.GET_TODO_SUCCESS,
  payload: data
});

export const getTodoFailure = () => ({
  type: todosActions.GET_TODO_FAILURE
});

export const getTodos = () => (dispatch, getState) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  return axios({
    url: "http://localhost:8080/interships",
    method: "GET"
  })
    .then((res) => {
      const todoSuccessAction = getTodoSuccess(res.data);
      dispatch(todoSuccessAction);
      console.log(todoSuccessAction)
    })
    .catch((err) => {
      const todoErrorAction = getTodoFailure();
      dispatch(todoErrorAction);
    });
};

console.log(getTodos());

// 1. auth, token
// 2. its not in the todo reducer / todo object
// 3. an API request which needs you to pass an API Key
// 4. how will you do it in this request

// action creators
