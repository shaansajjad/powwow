import * as actionTypes from "./types";

export const setUser = (user) => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currenUser: user,
    },
  };
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER,
  };
};
