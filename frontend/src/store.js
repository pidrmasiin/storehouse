import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from './reducers/itemsReducer'

const reducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
)

export default store;
