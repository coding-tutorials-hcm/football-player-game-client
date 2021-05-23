import * as ActionTypes from "./ActionTypes";

export const test = (
  state = { isLoading: true, errMess: null, test: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TEST:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        test: action.payload,
      };
    case ActionTypes.TEST_LOADING:
      return { ...state, isLoading: true, errMess: null, test: [] };
    case ActionTypes.TEST_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
