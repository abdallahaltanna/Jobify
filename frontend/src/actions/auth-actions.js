import {
  REGISTER_USER_PENDING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../constants/authConstants";
import axios from "axios";
import { clearAlert } from "../actions/ui-actions";

const setUserInfoToLocalStorage = ({ user, token, location }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  localStorage.setItem("location", location);
};

const removeUserInfoFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("location");
};

export const register = (userInfo) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_PENDING });
  try {
    const { data } = await axios.post(
      `${process.env.auth_api}/register`,
      userInfo
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
    setUserInfoToLocalStorage(data);
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILED,
      payload: error.response.data.msg,
    });
  }
  dispatch(clearAlert());
};
