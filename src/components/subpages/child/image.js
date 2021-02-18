import React from "react";

import Styles from "./image.module.scss";

import MiddleImage from "../../../images/child-middle.jpg";

const Image = () => {
	return <div id={Styles.middle_image} style={{ backgroundImage: `url(${MiddleImage})` }}></div>;
};

export default Image;
