import { combineReducers, createStore } from 'redux';
import authUserReducer from '@/redux/reducers/auth';
import switchLightReducer from '@/redux/reducers/light'

const store = createStore(
    combineReducers({
        session: authUserReducer,
        light: switchLightReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

console.log('MADRE STORE',store.getState());