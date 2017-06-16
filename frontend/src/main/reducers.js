import { combineReducers } from 'redux';
import DashboardReducers from '../dashboard/dashboardReducers';
import TabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducers ,
  tab: TabReducer
});

export default rootReducer;

