import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllInterviewsReducer } from './reducers/interviewReducer'

const initialState = {}

const reducer = combineReducers({
  getAllInterviews: getAllInterviewsReducer
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store
