import axios from 'axios';

export const BILLING_CYCLE_FETCHED = 'BILLING_CYCLE_FETCHED';

const URL = 'http://localhost:3000/api/payCycles'; 

export const getList = () => {
  const request = axios.get(URL);

  return {
    type: BILLING_CYCLE_FETCHED, 
    payload: request
  }
} 