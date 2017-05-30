import React from 'react';

export default props => (
  <li>
    <a href={props.path}>
      <span className={`fa fa-${props.icon}`}></span>
      {props.label}
    </a>
  </li>
);