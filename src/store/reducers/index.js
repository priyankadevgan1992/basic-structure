// external imports
import { combineReducers } from 'redux';

// reducers import
import appReducer from './appReducer';

export default combineReducers({
  app: appReducer
});
