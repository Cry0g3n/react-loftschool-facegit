import React from 'react';
import {shallow} from 'enzyme';
import {UserPage} from '../UserPage';

describe('Component UserPage', () => {
    it('Should be a spiner / loader ifprops.isFetching === true', () => {
        const match = {params: {name: 'User123'}};
        const fetchUserRequestMock = jest.fn();
        const wrapper = shallow(
            <UserPage
                match={match}
                fetchUserRequest={fetchUserRequestMock}
                isFetching={true}
            />,
        );
        const spinnerElement = wrapper.find('Spinner');
        expect(spinnerElement).toHaveLength(1);
    });

    it('There should be a message about the absence of the user if isFetching === false && user == null', () => {
        const match = {params: {name: 'User123'}};
        const fetchUserRequestMock = jest.fn();
        const wrapper = shallow(
            <UserPage
                match={match}
                fetchUserRequest={fetchUserRequestMock}
                isFetching={false}
                user={null}
            />,
        );
        const errorElement = wrapper.find('.error');
        expect(errorElement).toHaveLength(1);
    });

    describe('Methods', () => {
        const match = {params: {name: 'Cry0g3n'}};
        const fetchUserRequestMock = jest.fn();
        const wrapper = shallow(
            <UserPage
                match={match}
                fetchUserRequest={fetchUserRequestMock}
            />,
        );

        it('There must be a method componentDidMount', () => {
            expect(wrapper.instance().componentDidMount).toBeDefined();
        });

        it('There must be a method componentWillReceiveProps', () => {
            expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
        });
    });

    describe('render', () => {
        const match = {params: {name: 'User123'}};
        const fetchUserRequestMock = jest.fn();
        const restProps = {
            isFetching: false,
            isFetched: true,
            user: {},
        };
        const wrapper = shallow(
            <UserPage
                match={match}
                fetchUserRequest={fetchUserRequestMock}
                {...restProps}
            />,
        );

        it('Contains user avatar', () => {
            const avatarElement = wrapper.find('div.user-card__avatar img');
            expect(avatarElement).toHaveLength(1);
        });

        it('Contains user login', () => {
            const loginElement = wrapper.find('span.user-card__login');
            expect(loginElement).toHaveLength(1);
        });

        it('Contains followers info', () => {
            const loginElement = wrapper.find('span.user-card__followers');
            expect(loginElement).toHaveLength(1);
        });

        it('There must be a component Followers', () => {
            expect(wrapper.find('Connect(Followers)')).toHaveLength(1);
        });

        it('The Followers component must have a login attribute, with a value passed via props login', () => {
            const randomId = Math.random()
                .toString()
                .slice(2, 6);
            const login = 'user' + randomId;
            wrapper.setProps({user: {login}});
            const loginProp = wrapper.find('Connect(Followers)').prop('login');
            expect(loginProp).toBe(login);
        });
    });
});