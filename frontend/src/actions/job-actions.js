import axios from "axios";
import {
  CLEAR_VALUES,
  HANDLE_CHANGE,
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  REMOVE_JOB_REQUEST,
  EDIT_JOB_REQUEST,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  GET_STATS_PENDING,
  GET_STATS_SUCCESS,
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

export const setEditJob = (id) => (dispatch) => {
  dispatch({ type: SET_EDIT_JOB, payload: id });
};

export const removeJob = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_JOB_REQUEST });
  const {
    auth: { token },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    await axios.delete(`${process.env.REACT_APP_JOB_API}/${id}`, config);
    dispatch(getJobs());
  } catch (error) {
    dispatch(logout());
  }
};

export const editJob = () => async (dispatch, getState) => {
  dispatch({ type: EDIT_JOB_REQUEST });
  const {
    job: { editJobId, position, company, jobLocation, jobType, status },
    auth: { token },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    await axios.patch(
      `${process.env.REACT_APP_JOB_API}/${editJobId}`,
      {
        position,
        company,
        jobLocation,
        jobType,
        status,
      },
      config
    );
    dispatch({ type: EDIT_JOB_SUCCESS });
    dispatch(clearValues());
  } catch (error) {
    if (error.response.status === 401) return;
    dispatch({ type: EDIT_JOB_ERROR, payload: error.response.data.msg });
  }
  dispatch(clearAlert());
};

export const showStats = () => async (dispatch, getState) => {
  dispatch({ type: GET_STATS_PENDING });

  const {
    auth: { token },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_JOB_API}/stats`,
      config
    );
    dispatch({ type: GET_STATS_SUCCESS, payload: data });
  } catch (error) {
    dispatch(logout());
  }
};
