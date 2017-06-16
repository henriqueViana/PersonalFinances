import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tabSelected } from './tabActions';

class TabHeader extends Component {

  render() {

    const selected = this.props.tab.selected === this.props.target;
    return(
      <li className={selected ? 'active' : ''}>
        <a 
          href='javascript:;' 
          data-toggle='tab' 
          data-target={this.props.target} 
          onClick={() => this.props.tabSelected(this.props.target)}
        >
          <span className={`fa fa-${this.props.icon}`}></span> {this.props.label} 
        </a>
      </li>
    )
  }
}

const mapStateToProps = state => ({tab: state.tab});

const mapDispatchToProps = dispatch => bindActionCreators({ tabSelected }, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);

