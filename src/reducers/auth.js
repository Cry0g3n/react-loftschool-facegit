import {authorize, logout} from "../actions/auth";
import {handleActions} from "redux-actions";

export default handleActions(
    {
        [authorize]: (state, action) => ({
            ...state,
            isAuthorized: true,
            token: action.payload
        }),
        [logout]: (state, action) => ({...state, token: null, isAuthorized: false})
    },
    {
        token: null,
        isAuthorized: false
    }
);

export const getIsAuthorized = state => state.auth.isAuthorized;