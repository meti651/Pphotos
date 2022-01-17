import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

import * as Styles from "./navigationBox.module.scss";

const NavigationBox = ({ link, image }) => {
	return (
		<Link to={`/szolgaltatasok${link}`} id={Styles.container}>
			<div id={Styles.image_wrapper}>
				<Img fluid={image.image.childImageSharp.fluid} alt={image.title} />
			</div>
			<div id={Styles.title}>{image.title}</div>
		</Link>
	);
};

export default NavigationBox;
