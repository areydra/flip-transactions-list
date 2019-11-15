import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

import transactions from './reducers/transactions'

const reducers = combineReducers({ transactions: transactions })

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default store