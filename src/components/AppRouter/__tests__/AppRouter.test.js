import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {shallow} from "enzyme";
import {AppRouter} from "../AppRouter";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

describe('AppRouter', () => {
    const wrapper = shallow(<AppRouter/>);

    it('contains Switch', () => {
        expect(wrapper.find(Switch)).toHaveLength(1);
    });

    it('contains PrivateRoute', () => {
        expect(wrapper.find(PrivateRoute)).toHaveLength(2);
        expect(wrapper.find(PrivateRoute).get(0).props.path).toEqual('/user/me');
        expect(wrapper.find(PrivateRoute).get(1).props.path).toEqual('/user/:name');
    });

    it('contains Route to /login', () => {
        expect(wrapper.find(Route).props().path).toEqual('/login');
    });

    it('contains Redirect to /user/me', () => {
        expect(wrapper.find(Redirect).props().to).toEqual('/user/me');
    });

    it('contains logout button', () => {
        wrapper.setProps({isAuthorized: true});
        expect(wrapper.find('button.logout')).toHaveLength(1);
    });

    it('contains network error', () => {
        wrapper.setProps({isNetworkError: true});

        expect(wrapper.find('.error')).toHaveLength(1);
    });
});