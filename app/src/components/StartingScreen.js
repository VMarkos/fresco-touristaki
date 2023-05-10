import React from "react";
import PropTypes from "prop-types";

import "../root.css";
import "./StartingScreen.css";

import "./Navbar";
import Navbar from "./Navbar";
import OptionList from "./OptionList";

export default class StartingScreen extends React.Component {
    static propTypes = {
        firstName: PropTypes.string,
    };

    render() {
        return (
            <div className="main-container">
                <Navbar
                    firstName={"John"}
                />
                <div className="options-container">
                    <OptionList
                        title={"Favorites"}
                    />
                </div>
            </div>
        );
    }
}