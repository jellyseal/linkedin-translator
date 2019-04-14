import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import jobReducer from './JobReducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    job: jobReducer,
});

export default createRootReducer;