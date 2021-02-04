import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import rootReduce from "../reducers";
import favoritesReducer from "../reducers/index";
import jobsReducer from "../reducers/jobs";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  favorites: {
    jobs: [],
  },
  jobs: [],
};

const bigReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
