import * as ActionTypes from "./ActionTypes";

export const users = (
  state = { isLoading: true, errMess: null, user: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_USERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        user: action.payload,
      };
    case ActionTypes.USERS_LOADING:
      return { ...state, isLoading: true, errMess: null, user: [] };
    case ActionTypes.USERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
