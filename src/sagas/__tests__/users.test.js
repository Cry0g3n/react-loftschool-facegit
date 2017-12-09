import {fetchUserSuccess, fetchUserFailure, fetchUserRequest} from '../../actions/users';
import {call, put} from 'redux-saga/effects';
import {fetchUserSaga} from '../users';
import {getUserInformation} from '../../api';
import requestFlow from '../request';

describe('Saga users:', () => {
    const action = {
        type: fetchUserRequest.toString(),
        payload: "login"
    };
    const saga = fetchUserSaga(action);
    const user = {
        data: {
            login: "Cry0g3n",
            id: "1"
        }
    };
    const error = new Error('test error');
    it('call getUserInformation', () => {
        expect(saga.next().value).toEqual(call(requestFlow, getUserInformation, action.payload));
    });
    it('dispatch action fetchUserSuccess with user from call on success call', () => {
        expect(saga.next(user).value).toEqual(put(fetchUserSuccess(user)));
    });
    it('dispatch action fetchUserFailure with user from call on success call', () => {
        expect(saga.throw(error).value).toEqual(put(fetchUserFailure(error)));
    });
});
