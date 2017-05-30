import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';

import { getSummary } from './dashboardActions';

class Dashboard extends Component{

  componentWillMount() {
    this.props.getSummary();
  }

  render() {

    const {credit, debt} = this.props.summary;
    return(
      <div>
        <ContentHeader title='Dashboard' subtitle='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 6 4' color='green' value={`R$ ${credit}`} text='Total de pagamentos' icon='bank' />
            <ValueBox cols='12 6 4' color='red' value={`R$ ${debt}`} text='Total de debitos' icon='credit-card' />
            <ValueBox cols='12 6 4' color='blue' value={`R$ ${credit - debt}`} text='Valor cosolidado' icon='money' />
          </Row>
        </Content>
      </div>
    )
  }
} 

const mapStateToProps = state => ({summary: state.dashboard.summary});

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);