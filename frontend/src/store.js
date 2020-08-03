import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer,productDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState = {};
const reduce = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduce, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store