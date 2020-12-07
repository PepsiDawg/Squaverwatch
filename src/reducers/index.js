import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import matchReducer from './matchReducer';
import testReducer from './testReducer';
import authReducer from './authReducer';

export default combineReducers({
    matches: matchReducer,
    collection: testReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer
});