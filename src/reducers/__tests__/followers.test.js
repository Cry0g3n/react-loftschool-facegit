import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure,
} from '../../actions/followers';
import followersReducer from '../followers';

const followers = {
    data: [{id: 1, login: 'Cry0g3n'}]
};
const error = new Error("test error");

describe('Reducer followers', () => {
    describe('поле ids', () => {
        it('очищают поле ids, если приходит action fetchFollowersRequest', () => {
            const next = followersReducer(undefined, fetchFollowersRequest(),);
            expect(next.ids).toEqual([]);
        });
        it('наполняют данными ids, если приходит action fetchFollowersSuccess', () => {
            const next = followersReducer(undefined, fetchFollowersSuccess(followers));
            expect(next.ids).toEqual(followers.data);
        });
    });

    describe('поле error', () => {
        it('очищают поле error, если приходит action fetchFollowersRequest,', () => {
            const next = followersReducer({error}, fetchFollowersRequest());
            expect(next.error).toEqual(null);
        });
        it('очищают поле error, если приходит action fetchFollowersSuccess,', () => {
            const next = followersReducer({error}, fetchFollowersSuccess(followers));
            expect(next.error).toEqual(null);
        });
        it('наполняют данными error, если приходит action fetchFollowersFailure,', () => {
            const error = new Error("test error");
            const next = followersReducer({error: null}, fetchFollowersFailure(error),);
            expect(next.error).toEqual(error);
        });
    });

    describe('isFetching', () => {
        it('если приходит action fetchFollowersRequest, isFetching = true', () => {
            const next = followersReducer({isFetching: false}, fetchFollowersRequest());
            expect(next.isFetching).toEqual(true);
        });

        it('если приходит action fetchFollowersSuccess, isFetching = false', () => {
            const next = followersReducer({isFetching: true}, fetchFollowersSuccess(followers));
            expect(next.isFetching).toEqual(false);
        });

        it('если приходит action fetchFollowersFailure, isFetching = false', () => {
            const next = followersReducer(
                {isFetching: true},
                fetchFollowersFailure(error),
            );
            expect(next.isFetching).toEqual(false);
        });
    });

    describe('isFetched', () => {
        it('если приходит action fetchFollowersRequest, isFetched = false', () => {
            const next = followersReducer(
                {isFetched: true},
                fetchFollowersRequest(),
            );
            expect(next.isFetched).toEqual(false);
        });

        it('если приходит action fetchFollowersSuccess, isFetched = true', () => {
            const next = followersReducer({isFetched: false}, fetchFollowersSuccess(followers),);
            expect(next.isFetched).toEqual(true);
        });

        it('если приходит action fetchFollowersFailure, isFetched = true', () => {
            const next = followersReducer({isFetched: false}, fetchFollowersFailure(error),);
            expect(next.isFetched).toEqual(true);
        });
    });
});