import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import If from '../operators/If';

import { tabSelected, showTabs } from './tabActions';

class TabHeader extends Component {

  render() {
    const selected = this.props.tab.selected === this.props.target;
    const visible = this.props.tab.visible[this.props.target];

    return(
      <If test={visible}>
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
      </If>
    )
  }
}

const mapStateToProps = state => ({tab: state.tab});

const mapDispatchToProps = dispatch => bindActionCreators({ tabSelected, showTabs }, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);

