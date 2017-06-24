import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList } from './billingCycleActions';

import IconButton from '../common/template/IconButton';

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList();
  }

  showList() {
    return this.props.list.map(item => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.month}</td>
        <td>{item.year}</td>
        <td>
          <IconButton type='warning' icon='edit'/>
          <IconButton type='danger' icon='trash-o'/>
        </td>
      </tr>
    ))
  }


  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.showList()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({list: state.payList.list});

const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);