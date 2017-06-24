import { TAB_SELECTED, SHOW_TABS } from './tabActions';

const INITIAL_STATE = { selected: '', visible: {} };

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case TAB_SELECTED:
      return {...state, selected: action.payload}
    
    case SHOW_TABS: 
      return {...state, visible: action.payload}

    default:
      return state
  }
}