import { combineReducers } from 'redux';
import DashboardReducers from '../dashboard/dashboardReducers';
import TabReducer from '../common/tab/tabReducer';
import ListReducer from '../billingCycle/billingCycleReducer'; 

const rootReducer = combineReducers({
  dashboard: DashboardReducers ,
  tab: TabReducer ,
  payList: ListReducer
});

export default rootReducer;

