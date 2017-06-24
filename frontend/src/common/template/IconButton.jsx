import React from 'react';

export default ({type, icon}) => (
  <button className={`btn btn-${type}`}>
    <span className={`fa fa-${icon}`}></span>
  </button>
)