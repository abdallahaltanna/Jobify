import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  TOGGLE_SIDEBAR,
} from "../constants/uiConstants";

// Alert
export const showAlert = () => (dispatch) => {
  dispatch({ type: DISPLAY_ALERT });
  dispatch(clearAlert());
};

export const clearAlert = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: HIDE_ALERT });
  }, 3000);
};

// toggle sidebar
export const toggleSidebar = () => (dispatch) => {
  dispatch({ type: TOGGLE_SIDEBAR });
};
