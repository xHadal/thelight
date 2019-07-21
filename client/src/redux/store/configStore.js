import { combineReducers, createStore } from 'redux';
import authUserReducer from '@/redux/reducers/auth';

const store = createStore(
    combineReducers({
        session: authUserReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

console.log('MADRE STORE',store.getState());