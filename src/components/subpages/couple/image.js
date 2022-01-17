import React from "react";

import * as Styles from "./image.module.scss";

import MiddleImage from "../../../images/couple-middle.png";

const Image = () => {
	return <div id={Styles.middle_image} style={{ backgroundImage: `url(${MiddleImage})` }}></div>;
};

export default Image;
