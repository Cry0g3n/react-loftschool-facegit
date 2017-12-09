import {handleActions} from 'redux-actions';
import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure,
} from '../actions/followers';
import {combineReducers} from "redux";

const ids = handleActions(
    {
        [fetchFollowersRequest]: () => [],
        [fetchFollowersSuccess]: (state, action) =>
            action.payload.data
    },
    []
);

const error = handleActions(
    {
        [fetchFollowersRequest]: () => undefined,
        [fetchFollowersSuccess]: () => undefined,
        [fetchFollowersFailure]: (state, action) =>
            action.payload
    },
    null
);

const isFetched = handleActions(
    {
        [fetchFollowersRequest]: () => false,
        [fetchFollowersSuccess]: () => true,
        [fetchFollowersFailure]: () => true
    },
    false
);

const isFetching = handleActions(
    {
        [fetchFollowersRequest]: () => true,
        [fetchFollowersSuccess]: () => false,
        [fetchFollowersFailure]: () => false
    },
    false
);

export default combineReducers({
    ids,
    error,
    isFetched,
    isFetching
});

export const getIds = state => state.followers.ids;
export const getIsFetched = state => state.followers.isFetched;
export const getIsFetching = state => state.followers.isFetching;
export const getError = state => state.followers.error;