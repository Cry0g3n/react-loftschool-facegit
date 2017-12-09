import {handleActions} from "redux-actions";
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from "../actions/users";
import {combineReducers} from "redux";

const initialState = null;
const initialStateError = null;

const data = handleActions(
    {
        [fetchUserRequest]: () => null,
        [fetchUserSuccess]: (state, action) =>
            action.payload.data
    },
    initialState
);

const error = handleActions(
    {
        [fetchUserRequest]: () => initialStateError,
        [fetchUserSuccess]: () => initialStateError,
        [fetchUserFailure]: (state, action) => action.payload
    },
    initialStateError
);

const isFetched = handleActions(
    {
        [fetchUserRequest]: () => false,
        [fetchUserSuccess]: () => true,
        [fetchUserFailure]: () => false
    },
    false
);

const isFetching = handleActions(
    {
        [fetchUserRequest]: () => true,
        [fetchUserSuccess]: () => false,
        [fetchUserFailure]: () => false
    },
    false
);

export default combineReducers({
    data,
    error,
    isFetched,
    isFetching
});

export const getData = state => state.users.data;
export const getUserError = state => state.users.error;
export const getIsFetched = state => state.users.isFetched;
export const getIsFetching = state => state.users.isFetching;