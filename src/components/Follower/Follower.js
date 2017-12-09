import React, {PureComponent} from 'react';
import './Follower.css';
import {Link} from "react-router-dom";

export class Follower extends PureComponent {
    render() {
        const {follower} = this.props;
        return (
            <div className="follower">
                <img
                    className="follower__avatar"
                    src={follower.avatar_url}
                    alt={follower.login}
                />
                <div className="follower__info">
                    <Link to={`/user/${follower.login}`}>{follower.login}</Link>
                </div>
            </div>
        );
    }
}