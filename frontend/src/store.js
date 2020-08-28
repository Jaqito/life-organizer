import {applyMiddleware, createStore} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(thunk))
