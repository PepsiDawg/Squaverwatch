import { FETCH_MATCHES, NEW_MATCH, EDIT_MATCH } from '../actions/types';

const initialState = {
    matches: [],
    match: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MATCHES:
            return {
                ...state,
                matches: action.payload
            };
        case NEW_MATCH:
            return {
                ...state,
                match: action.payload
            };
        case EDIT_MATCH:
            return {
                ...state,
                match: action.payload
            };
        default:
            return state;
    }
}