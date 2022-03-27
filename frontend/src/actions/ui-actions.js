import { DISPLAY_ALERT, HIDE_ALERT } from "../constants/uiConstants";

export const showAlert = () => (dispatch) => {
  dispatch({ type: DISPLAY_ALERT });
  dispatch(clearAlert());
};

export const clearAlert = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: HIDE_ALERT });
  }, 3000);
};
