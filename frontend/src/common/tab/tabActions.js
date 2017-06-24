export const TAB_SELECTED = 'TAB_SELECTED';
export const SHOW_TABS = 'SHOW_TABS';

export const tabSelected = tabId => ({
  type: TAB_SELECTED,
  payload: tabId
});

export const showTabs = (...tabs) => {
  const tabsObj = {};
  
  tabs.forEach(element => tabsObj[element] = true);

  return {
    type: SHOW_TABS, 
    payload: tabsObj
  }

}

