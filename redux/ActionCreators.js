import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

// questions
export const fetchQuestions = () => (dispatch) => {
  dispatch(questionsLoading());
  return fetch(baseUrl + "questions/2YhMcnj4wAkEa1ZDJTlj")
    .then((response) => {
      if (!response.ok)
        throw Error("Error " + response.status + ": " + response.statusText);
      else return response.json();
    })
    .then((questions) => dispatch(addQuestions(questions)))
    .catch((error) => dispatch(questionsFailed(error.message)));
};
const questionsLoading = () => ({
  type: ActionTypes.QUESTIONS_LOADING,
});
const questionsFailed = (errmess) => ({
  type: ActionTypes.QUESTIONS_FAILED,
  payload: errmess,
});
const addQuestions = (questions) => ({
  type: ActionTypes.ADD_QUESTIONS,
  payload: questions,
});

// users
export const fetchUsers = () => (dispatch) => {
  dispatch(usersLoading());
  return fetch(baseUrl + "users")
    .then((response) => {
      if (!response.ok)
        throw Error("Error " + response.status + ": " + response.statusText);
      else return response.json();
    })
    .then((users) => dispatch(addUsers(users)))
    .catch((error) => dispatch(usersFailed(error.message)));
};
const usersLoading = () => ({
  type: ActionTypes.USERS_LOADING,
});
const usersFailed = (errmess) => ({
  type: ActionTypes.USERS_FAILED,
  payload: errmess,
});
const addUsers = (users) => ({
  type: ActionTypes.ADD_USERS,
  payload: users,
});

// test
export const fetchTest = (rank) => (dispatch) => {
  dispatch(testLoading());
  return axios
    .post(baseUrl + `questions/test-exam?rank=${rank}&count=10`, {})
    .then((response) => {
      return response.data;
    })
    .then((test) => dispatch(addTest(test)))
    .catch((error) => dispatch(testFailed(error.message)));
};

const testLoading = () => ({
  type: ActionTypes.TEST_LOADING,
});
const testFailed = (errmess) => ({
  type: ActionTypes.TEST_FAILED,
  payload: errmess,
});
const addTest = (test) => ({
  type: ActionTypes.ADD_TEST,
  payload: test,
});

// user
export const createUser = (data) => (dispatch) => {
  dispatch(userLoading());
  return axios
    .post(baseUrl + "users", data)
    .then((response) => {
      return response.data;
    })
    .then((msg) => dispatch(addUser(msg)))
    .catch((error) => dispatch(userFailed(error.message)));
};

export const updateUser = (id, data) => (dispatch) => {
  dispatch(userLoading());
  return axios
    .patch(baseUrl + "users/" + id, data)
    .then((response) => {
      return response.data;
    })
    .then((msg) => dispatch(addUser(msg)))
    .catch((error) => dispatch(userFailed(error.message)));
};

export const fetchUser = (id) => (dispatch) => {
  dispatch(userLoading());
  return axios
    .get(baseUrl + "users/" + id)
    .then((response) => {
      return response.data;
    })
    .then((msg) => dispatch(addUser(msg)))
    .catch((error) => dispatch(userFailed(error.message)));
};

const userLoading = () => ({
  type: ActionTypes.USER_LOADING,
});
const userFailed = (errmess) => ({
  type: ActionTypes.USER_FAILED,
  payload: errmess,
});
const addUser = (user) => ({
  type: ActionTypes.ADD_USERS,
  payload: user,
});
