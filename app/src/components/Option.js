import React from "react";
import PropTypes from "prop-types";

import "../root.css";
import "./Option.css";

import EcoPoints from "./EcoPoints";

export default class Option extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        ecoPoints: PropTypes.number,
        image: PropTypes.node,
    }

    render() {
        return (
            <div className="option-relative-container">
                <img className="option-image-container" src={this.props.image}></img>
                <div className="option-info-container">
                    {this.props.name}
                </div>
                <div>
                    <EcoPoints
                        points={this.props.ecoPoints}
                    />
                </div>
            </div>
        );
    }
}