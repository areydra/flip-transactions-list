import axios from 'axios';

import Transactions from '../../models/Transactions';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const SEARCH_TRANSACTIONS = 'SEARCH_TRANSACTIONS';

export const fetchTransactions = () => {
  return async dispatch => {
    await axios.get('https://nextar.flip.id/frontend-test').then(data => {
        const transactions = [];
        for(key in data.data){
          transactions.push(
            new Transactions(
              data.data[key],
              data.data[key].amount,
              data.data[key].unique_code,
              data.data[key].status,
              data.data[key].sender_bank,
              data.data[key].account_number,
              data.data[key].beneficiary_name,
              data.data[key].beneficiary_bank,
              data.data[key].remark,
              data.data[key].created_at,
              data.data[key].completed_at,
              data.data[key].fee,
            ),
          );
        }
        dispatch({type: FETCH_TRANSACTIONS, transactions: transactions})
    }).catch(err => {
        throw Error(err)
    })
  };
};

export const searchTransactions = name => {
  return async dispatch => {
    try{
        dispatch({type: SEARCH_TRANSACTIONS, search: name})
    }catch(err) {
        throw Error(err)
    }
  };
};
