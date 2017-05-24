import React, { Component } from 'react';

import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component{

  render() {
    return(
      <div>
        <ContentHeader title='Dashboard' subtitle='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 6 4' color='green' value='R$ 10' text='Total de pagamentos' icon='bank' />
            <ValueBox cols='12 6 4' color='red' value='R$ 10' text='Total de debitos' icon='credit-card' />
            <ValueBox cols='12 6 4' color='blue' value='R$ 0' text='Valor cosolidado' icon='money' />
          </Row>
        </Content>
      </div>
    )
  }
} 

export default Dashboard;