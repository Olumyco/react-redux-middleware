import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { validatePostArticle } from './middleware/index'
import reducer from './reducers/article';

const store = createStore(reducer, applyMiddleware(validatePostArticle, thunk));

export default store;