import {
  REGISTER_USER_PENDING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  UPDATE_PROFILE_PENDING,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} from "../constants/authConstants";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const location = localStorage.getItem("location");

export const authUser = (
  state = {
    isLoading: false,
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: location || "",
  },
  { type, payload }
) => {
  switch (type) {
    case REGISTER_USER_PENDING:
      return { ...state, isLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        userLocation: payload.location,
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_USER_PENDING:
      return { ...state, isLoading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        userLocation: payload.location,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        token: null,
        userLocation: "",
      };
    case UPDATE_PROFILE_PENDING:
      return { ...state, isLoading: true };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        userLocation: payload.location,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
