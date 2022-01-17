import React, { useEffect, useState } from "react";

import * as Styles from "./image.module.scss";

import MiddleImage from "../../../images/portrait-middle.png";

const Image = () => {
	const [imageWidthProportion, setImageWidthProportion] = useState();

	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth > 1024) setImageWidthProportion(window.innerWidth / 1920);
			else if (window.innerWidth <= 1024 && window.innerWidth > 768) setImageWidthProportion(1);
			else if (window.innerWidth <= 768 && window.innerWidth > 480) setImageWidthProportion(window.innerWidth / 768);
			else if (window.innerWidth <= 480) setImageWidthProportion(window.innerWidth / 480);
		};

		window.addEventListener("resize", resizeHandler);
		resizeHandler();
		return () => window.removeEventListener("resize", resizeHandler);
	}, []);

	return (
		<div
			id={Styles.middle_image}
			style={{
				backgroundImage: `url(${MiddleImage})`,
				width: `${520 * imageWidthProportion}px`,
				height: `${520 * imageWidthProportion}px`,
			}}
		></div>
	);
};

export default Image;
