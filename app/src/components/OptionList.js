import React from "react";
import PropTypes from "prop-types";

// Importing images of places TODO Change that!

import parthenon from "../assets/places/parthenon.jpeg";
import acropolisMuseum from "../assets/places/acropolisMuseum.jpg";
import tzistarakisMosque from "../assets/places/tzistarakisMosque.jpg";

import "../root.css";
import "./OptionList.css";

import Option from "./Option";

export default class OptionList extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    render() {
        return (
            <div className="list-container">
                <h2 className="list-container-title">
                    {this.props.title}
                </h2>
                <div className="options-list-container">
                    <Option
                        image={parthenon}
                        name={"The Parthenon"}
                        ecoPoints={178}
                    />
                    <Option
                        image={acropolisMuseum}
                        name={"The Acropolis Museum"}
                        ecoPoints={84}
                    />
                    <Option
                        image={tzistarakisMosque}
                        name={"Tzistarakis Mosque"}
                        ecoPoints={107}
                    />
                </div>
            </div>
        );
    }
}