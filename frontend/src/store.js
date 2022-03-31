import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { uiReducer } from "./reducers/ui-reducers";
import { authUser } from "./reducers/auth-reducers";
import { jobReducer } from "./reducers/job-reducers";

const reducer = combineReducers({
  ui: uiReducer,
  auth: authUser,
  job: jobReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
