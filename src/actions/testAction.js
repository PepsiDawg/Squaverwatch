import { TEST_ACTION } from './types';

export const test = (payload) => dispatch => {
    dispatch({
        type: TEST_ACTION,
        payload: payload
    });
}