import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default props => (
  <ReduxToastr 
    timeOut={4000}
    newestOnTop={true}
    preventDuplicate={true}
    position='top-right'
    transitionIn='fadeIn'
    transitionOut='fadeOut'
    progressBar
  />
)