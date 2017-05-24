import React from 'react';
import { Link } from 'react-router';

export default props => (
  <header className='main-header'>
    
    <a href='/#/' className='logo'>
      <span className='logo-mini'>
        <i className='fa fa-money'></i>
      </span>
      <span className='logo-lg'>
        <i className='fa fa-money'></i>
        <span> Personal Finances</span>
      </span>
    </a>

    <nav className='navbar navba-static-top'>
      <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>
  </header>
);