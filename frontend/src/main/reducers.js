import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducers from '../dashboard/dashboardReducers';
import TabReducer from '../common/tab/tabReducer';
import ListReducer from '../billingCycle/billingCycleReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducers ,
  tab: TabReducer ,
  payList: ListReducer ,
  form: formReducer ,
  toastr: toastrReducer
});

export default rootReducer;

