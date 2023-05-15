import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers.combine';

export default createStore(reducers);