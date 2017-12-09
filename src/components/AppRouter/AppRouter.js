import React, {Component} from "react";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import UserPage from "../UserPage/UserPage";
import AuthPage from "../AuthPage/AuthPage";
import {
    getIsNetworkErrorPresent,
    getNetworkError
} from '../../reducers/network';
import {connect} from "react-redux";
import {getIsAuthorized} from "../../reducers/auth";
import {logout} from "../../actions/auth";
import './AppRouter.css'

export class AppRouter extends Component {
    handleLogout = () => {
        this.props.logout();
    };

    render() {
        const {isAuthorized, isNetworkError, errorMessage} = this.props;

        return (
            <div className="App">
                {isAuthorized && (
                    <button className="logout" onClick={this.handleLogout}>Logout</button>
                )}
                {isNetworkError && <div className="error">{errorMessage}</div>}
                <Switch>
                    <PrivateRoute path="/user/me" component={UserPage}/>
                    <PrivateRoute path="/user/:name" component={UserPage}/>
                    <Route path="/login" component={AuthPage}/>
                    <Redirect to="/user/me"/> {/*TODO: вставка логина*/}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
    isNetworkError: getIsNetworkErrorPresent(state),
    errorMessage: getNetworkError(state)
});

const mapDispatchToProps = {logout};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));