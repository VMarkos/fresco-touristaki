import React from "react";
import PropTypes from "prop-types";
import userIcon from "../assets/icons/user-icon.svg";

import "../root.css";
import "./Navbar.css";

export default class Navbar extends React.Component {
    static propTypes = {
        firstName: PropTypes.string,
    };

    render() {
        return (
            <nav className="navbar-container">
                <div className="centering-container">
                    <p className="username-p">
                        Hi {this.props.firstName}!
                    </p>
                    <img className="user-icon-container" src={userIcon} alt="user icon"></img>
                </div>
            </nav>
        );
    }
}