import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  TOGGLE_SIDEBAR,
} from "../constants/uiConstants";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} from "../constants/authConstants";
import {
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
} from "../constants/jobConstants";

export const uiReducer = (
  state = { showAlert: false, alertText: "", alertType: "", showSidebar: true },
  { type, payload }
) => {
  switch (type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: "Please provide all values",
        alertType: "danger",
      };
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        alertText: "",
        alertType: "",
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        showAlert: true,
        alertText: "User Created, Redirecting...",
        alertType: "success",
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        showAlert: true,
        alertText: payload,
        alertType: "danger",
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        showAlert: true,
        alertText: "Login Successful! Redirecting...",
        alertType: "success",
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        showAlert: true,
        alertText: payload,
        alertType: "danger",
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        showAlert: true,
        alertText: "User Profile Updated!",
        alertType: "success",
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        showAlert: true,
        alertText: payload,
        alertType: "danger",
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        showAlert: true,
        alertText: "New Job Created!",
        alertType: "success",
      };
    case CREATE_JOB_ERROR:
      return {
        ...state,
        showAlert: true,
        alertText: payload,
        alertType: "danger",
      };
    case EDIT_JOB_SUCCESS:
      return {
        ...state,
        showAlert: true,
        alertText: "Job Updated!",
        alertType: "success",
      };
    case EDIT_JOB_ERROR:
      return {
        ...state,
        showAlert: true,
        alertText: payload,
        alertType: "danger",
      };
    default:
      return state;
  }
};
