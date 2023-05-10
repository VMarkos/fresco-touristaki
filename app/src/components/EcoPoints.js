import React from "react";
import PropTypes from "prop-types";

import leaf from "../assets/icons/leaf-icon.svg";

import "../root.css";
import "./EcoPoints.css";

export default class EcoPoints extends React.Component {
    static propTypes = {
        points: PropTypes.number,
    };

    render() {
        return (
            <div className="ecopoints-container">
                <img className="ecopoints-icon-container" src={leaf}></img>
                <div className="ecopoints-text-container">
                    {this.props.points}
                </div>
            </div>
        );
    }
}