import {call, put, takeLatest} from 'redux-saga/effects';

import {getUserInformation, getTokenOwner} from '../api';
import requestFlow from './request';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchTokenOwnerRequest
} from '../actions/users';

export function* fetchUserSaga(action) {
    try {
        let user;
        if (action.type === fetchUserRequest.toString()) {
            user = yield call(requestFlow, getUserInformation, action.payload);
        } else if (action.type === fetchTokenOwnerRequest.toString()) {
            user = yield call(requestFlow, getTokenOwner, action.payload);
        }
        yield put(fetchUserSuccess(user));
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
}

export function* fetchUserWatch() {
    yield takeLatest([fetchUserRequest, fetchTokenOwnerRequest], fetchUserSaga);
}