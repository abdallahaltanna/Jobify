import {
  REGISTER_USER_PENDING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../constants/authConstants";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const location = localStorage.getItem("location");

export const authUser = (
  state = {
    isLoading: false,
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: location || "",
  },
  { type, payload }
) => {
  switch (type) {
    case REGISTER_USER_PENDING:
      return { ...state, isLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        userLocation: payload.location,
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
