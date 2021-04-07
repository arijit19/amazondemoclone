import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import ShopReducer from './reducers/shop';
import AuthReducer from './reducers/auth';

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :( null || compose);

const composeEnhancers = (process.env.NODE_ENV === 'development' &&
    (window)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(combineReducers({
    shop: ShopReducer,
    auth: AuthReducer
}),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
