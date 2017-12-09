import React from 'react';
import {MemoryRouter, Link} from 'react-router-dom';
import {Follower} from '../Follower';
import {shallow, mount} from 'enzyme';

describe('Component Follower', () => {
    it('contains avatar', () => {
        const wrapper = shallow(<Follower follower={{}}/>);
        expect(wrapper.find('img.follower__avatar')).toHaveLength(1);
    });

    it('contains login through props', () => {
        const login = 'Cry0g3n';
        const wrapper = shallow(
            <MemoryRouter>
                <Follower follower={{login}}/>
            </MemoryRouter>,
        );
        expect(wrapper.find('Follower').prop('follower').login).toBe(login);
    });

    it('Verify that the user\'s login link leads to /user/{user.login}', () => {
        const login = 'User123';
        const wrapper = mount(
            <MemoryRouter>
                <Follower follower={{login}}/>
            </MemoryRouter>,
        );
        const findLinks = wrapper.findWhere(el => {
            return el.type() === Link && el.prop('to') === `/user/${login}`;
        });
        expect(findLinks).toHaveLength(1);
    });
});