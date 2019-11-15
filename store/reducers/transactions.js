import _ from 'lodash'
import { FETCH_TRANSACTIONS, SEARCH_TRANSACTIONS } from "../actions/transactions";

const initialState = {
    transactions : [],
    resetSearch: [],
    nullSearch: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return {
              ...state,
              transactions: action.transactions,
              resetSearch: action.transactions,
            };
        case SEARCH_TRANSACTIONS:
            const search = _.filter(state.resetSearch, obj =>
                  _.startsWith(
                    obj.id.beneficiary_name.toLowerCase(),
                    action.search.toLowerCase(),
                  ),
                );
            return {
              ...state,
              transactions: search.length ? search : state.resetSearch,
              nullSearch: search.length ? 0 : 1
            };
        default:
            return state
    }
}