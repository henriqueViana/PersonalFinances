import React from 'react';

export default props => (
  <li className='treeview'>
    <a href>
      <span className={`fa fa-${props.icon}`}></span>
      {props.label}
      <span className='fa fa-angle-down pull-right'></span>
    </a>
    <ul className='treeview-menu'>
      {props.children}
    </ul>
  </li>
);
