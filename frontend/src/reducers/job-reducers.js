import {
  CLEAR_VALUES,
  HANDLE_CHANGE,
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
} from "../constants/jobConstants";

const location = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  isEditing: false,
  jobLocation: location || "",
  editJobId: "",
  position: "",
  company: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  jobStatusOptions: ["interview", "declined", "pending"],
  status: "pending",
  jobs: [],
};

export const jobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_CHANGE:
      return { ...state, [payload.name]: payload.value };
    case CLEAR_VALUES:
      return {
        ...state,
        isEditing: false,
        jobLocation: location,
        editJobId: "",
        position: "",
        company: "",
        jobType: "full-time",
        status: "pending",
      };
    case CREATE_JOB_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case GET_JOBS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: payload.jobs,
      };
    default:
      return state;
  }
};
