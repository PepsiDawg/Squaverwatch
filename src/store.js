import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import firebaseConfig from './config/firebaseConfig';

const initialState = {};
const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)));

export default store;