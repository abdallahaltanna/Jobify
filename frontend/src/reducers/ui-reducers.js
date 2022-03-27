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
} from "../constants/authConstants";

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
    default:
      return state;
  }
};
