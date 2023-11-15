const redux = require('redux');
const createStore =redux.createStore();
import cake from './Cake/CakeReducer';

const store = createStore(cakeReducer)

export default store;