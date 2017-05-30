import axios from 'axios';

export const BILLING_SUMMARY_FETCHED = 'BILLING_SUMMARY_FETCHED'; 

const URL = 'http://localhost:3000/api';

export const getSummary = () => {
  const request = axios.get(`${URL}/payCycles/summary`);

  return {
    type: BILLING_SUMMARY_FETCHED ,
    payload: request
  }
}