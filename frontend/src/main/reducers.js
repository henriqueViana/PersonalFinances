import { combineReducers } from 'redux';
import dashboardReducers from '../dashboard/dashboardReducers';

const rootReducer = combineReducers({
  dashboard: dashboardReducers
});

export default rootReducer;

