import React, { useRef } from "react";
import Img from "gatsby-image";

import Styles from "./images.module.scss";

const Image = ({ image, focusSetter }) => {
	const container = useRef();

	const ClickHandler = () => {
		if (container.current.classList.toggle(Styles.focus)) {
			container.current.style.width = `${image.node.childImageSharp.fluid.aspectRatio * 80}vh`;
			focusSetter(true);
		} else {
			container.current.style = null;
			focusSetter(false);
		}
	};

	return (
		<div ref={container} className={`${Styles.image_container}`} onClick={ClickHandler}>
			<div className={Styles.image_wrapper}>
				<Img fluid={image.node.childImageSharp?.fluid} alt={`gallery`} />
				<div className={Styles.close}>
					<div className={`${Styles.line} ${Styles.left}`}></div>
					<div className={`${Styles.line} ${Styles.right}`}></div>
				</div>
			</div>
		</div>
	);
};

export default Image;
