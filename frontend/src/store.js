import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { uiReducer } from "./reducers/ui-reducers";
import { authUser } from "./reducers/auth-reducers";

const reducer = combineReducers({
  ui: uiReducer,
  auth: authUser,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
