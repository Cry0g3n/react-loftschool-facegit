import {call, put, takeLatest} from 'redux-saga/effects';
import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure,
} from '../actions/followers';
import {getUserFollowers} from '../api';

export function* fetchFollowersSaga(action) {
    try {
        const followers = yield call(getUserFollowers, action.payload);
        yield put(fetchFollowersSuccess(followers));
    } catch (error) {
        yield put(fetchFollowersFailure(error));
    }
}

export function* fetchFollowersWatch() {
    yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}