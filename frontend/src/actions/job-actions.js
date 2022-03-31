import axios from "axios";
import {
  CLEAR_VALUES,
  HANDLE_CHANGE,
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
} from "../constants/jobConstants";
import { clearAlert } from "./ui-actions";
import { logout } from "./auth-actions";

export const handleChanges =
  ({ name, value }) =>
  (dispatch) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

export const clearValues = () => (dispatch) => {
  dispatch({ type: CLEAR_VALUES });
};

export const createJob = () => async (dispatch, getState) => {
  dispatch({ type: CREATE_JOB_PENDING });
  try {
    const {
      auth: { token },
      job: { position, company, jobLocation, jobType, status },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.post(
      process.env.REACT_APP_JOB_API,
      { position, company, jobLocation, jobType, status },
      config
    );
    dispatch({ type: CREATE_JOB_SUCCESS });
  } catch (error) {
    if (error.response.status !== 401) {
      dispatch({ type: CREATE_JOB_ERROR, payload: error.response.data.msg });
    }
  }
  dispatch(clearAlert());
};

export const getJobs = () => async (dispatch, getState) => {
  dispatch({ type: GET_JOBS_PENDING });
  const {
    auth: { token },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(process.env.REACT_APP_JOB_API, config);
    dispatch({ type: GET_JOBS_SUCCESS, payload: data });
  } catch (error) {
    dispatch(logout());
  }
};
