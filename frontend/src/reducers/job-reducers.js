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
  CLEAR_FILTERS,
  CHANGE_PAGE,
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
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
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
        isLoading: false,
        jobs: payload.jobs,
        totalJobs: payload.totalJobs,
        numOfPages: payload.numOfPages,
      };
    case SET_EDIT_JOB:
      const job = state.jobs.find((job) => job._id === payload);
      const { _id, position, company, status, jobType, jobLocation } = job;
      return {
        ...state,
        isEditing: true,
        editJobId: _id,
        position,
        company,
        status,
        jobType,
        jobLocation,
      };
    case REMOVE_JOB_REQUEST:
      return { ...state, isLoading: true };
    case EDIT_JOB_REQUEST:
      return { ...state, isLoading: true };
    case EDIT_JOB_SUCCESS:
      return { ...state, isLoading: false };
    case EDIT_JOB_ERROR:
      return { ...state, isLoading: false };
    case GET_STATS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: payload.defaultStats,
        monthlyApplications: payload.monthlyApplications,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        search: "",
        searchStatus: "all",
        searchType: "all",
        sort: "latest",
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
};
