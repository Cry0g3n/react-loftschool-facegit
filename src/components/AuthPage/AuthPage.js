import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import "./AuthPage.css";
import {authorize} from "../../actions/auth";
import {getIsAuthorized} from "../../reducers/auth";

class AuthPage extends Component {
    state = {
        input: ""
    };

    handleChange = event => {
        this.setState({input: event.target.value});
    };

    handleKeyDown = event => {
        const {authorize} = this.props;
        if (event.keyCode === 13) {
            authorize(this.state.input);
        }
    };

    render() {
        const {isAuthorized} = this.props;
        return (
            <div className="Auth_page">
                {isAuthorized ? <Redirect to={"/user/dex157"}/> : null}
                <p>
                    Получить токен нужно на своей странице github, перейдите по
                    <a href="https://github.com/settings/tokens">адресу</a>
                    и создать себе токен. Запишите куда нибудь токен, так как после создания доступ к нему будет только
                    один раз.
                </p>
                <input
                    placeholder="auth_token"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <p>После ввода нажать Enter</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = {
    authorize
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);