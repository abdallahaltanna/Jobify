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
      `${process.env.REACT_APP_AUTH_API}/register`,
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

export const login = (userInfo) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_PENDING });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/login`,
      userInfo
    );
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });
    setUserInfoToLocalStorage(data);
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILED,
      payload: error.response.data.msg,
    });
  }
  dispatch(clearAlert());
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  removeUserInfoFromLocalStorage();
};

export const updateUserProfile = (userInfo) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_PROFILE_PENDING });
  try {
    const {
      auth: { token },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.patch(
      `${process.env.REACT_APP_AUTH_API}/updateUser`,
      userInfo,
      config
    );
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    setUserInfoToLocalStorage(data);
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_ERROR, payload: error.response.data.msg });
  }
  dispatch(clearAlert());
};
