import { DISPLAY_ALERT, HIDE_ALERT } from "../constants/uiConstants";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../constants/authConstants";

export const alertReducer = (
  state = { showAlert: false, alertText: "", alertType: "" },
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
    default:
      return state;
  }
};
