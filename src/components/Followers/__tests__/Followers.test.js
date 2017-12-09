import React from 'react';
import {shallow} from 'enzyme';
import {Followers} from '../Followers';

describe('Component Followers', () => {
    it('must be a loader, if isFetching === true', () => {
        const fetchFollowersRequestMock = jest.fn();
        const wrapper = shallow(
            <Followers
                fetchFollowersRequest={fetchFollowersRequestMock}
                isFetching={true}
            />,
        );
        const spinnerElement = wrapper.find('Spinner');
        expect(spinnerElement).toHaveLength(1);
    });

    it('Verify that the Followers components are returned in the amount in which they are passed to the props.followers.', () => {
        const fetchFollowersRequestMock = jest.fn();
        const followers = [{id: 1}, {id: 2}];
        const wrapper = shallow(
            <Followers
                fetchFollowersRequest={fetchFollowersRequestMock}
                followers={followers}
                isFetched={true}
                isFetching={false}
            />,
        );
        expect(wrapper.find('Follower')).toHaveLength(followers.length);
    });

    describe('methods', () => {
        it('must be the method componentDidMount', () => {
            const fetchFollowersRequestMock = jest.fn();
            const wrapper = shallow(
                <Followers fetchFollowersRequest={fetchFollowersRequestMock}/>,
            );
            expect(wrapper.instance().componentDidMount).toBeDefined();
        });
    });
});