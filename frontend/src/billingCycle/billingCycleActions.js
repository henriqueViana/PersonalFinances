import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';

import { showTabs, tabSelected } from '../common/tab/tabActions';

export const BILLING_CYCLE_FETCHED = 'BILLING_CYCLE_FETCHED';
export const BILLING_CYCLE_CREATE = 'BILLING_CYCLE_CREATE';

const URL = 'http://localhost:3000/api/payCycles'; 

export const getList = () => {
  const request = axios.get(URL);

  return {
    type: BILLING_CYCLE_FETCHED, 
    payload: request
  }
} 

export const create = values => {

  return dispatch => {
    axios.post(URL, values)
     .then(res => {
       toastr.success('Sucesso', 'Pagamento criado com sucesso')
       
       dispatch([
         resetForm('billingCycleForm') ,
         getList() ,
         tabSelected('tabList') ,
         showTabs('tabList', 'tabCreate')
       ])
     })
     .catch(err => (err.response.data.errors.map(error => (toastr.error('Erro', error)))))
  }

}
