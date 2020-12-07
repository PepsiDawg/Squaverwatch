import { TEST_ACTION } from '../actions/types';

const initialState = {
    name: 'matches'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TEST_ACTION:
            console.log(action.payload);
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
}