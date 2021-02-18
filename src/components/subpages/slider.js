import React, { useEffect, useState } from "react";
import Arrow from "./arrow";
import Img from "gatsby-image";

import Styles from "./slider.module.scss";

const Slider = ({ images }) => {
	const [translate, setTranslate] = useState(0);
	const [imageWidth, setImageWidth] = useState();

	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth > 1024) setImageWidth((window.innerWidth / 1800) * 240);
			else if (window.innerWidth <= 1024 && window.innerWidth > 768) setImageWidth((window.innerWidth / 950) * 250);
			else if (window.innerWidth > 480 && window.innerWidth <= 768) setImageWidth((window.innerWidth / 768) * 200);
			else if (window.innerWidth <= 480) setImageWidth((window.innerWidth / 400) * 200);
		};

		window.addEventListener("resize", resizeHandler);
		resizeHandler();
		return () => window.removeEventListener("resize", resizeHandler);
	}, []);

	return (
		<div id={Styles.container}>
			<Arrow direction="left" translate={translate} setTranslate={setTranslate} />
			<div id={Styles.images_container}>
				{images.map((image, index) => {
					return (
						<div key={index} style={{ transform: `translateX(-${100 * translate}%)` }} className={Styles.image_wrapper}>
							<div
								id={Styles.image_container}
								style={{ width: `${image.childImageSharp.fluid.aspectRatio * imageWidth}px` }}
							>
								<Img fluid={image.childImageSharp.fluid} alt={`${index}`} />
							</div>
						</div>
					);
				})}
			</div>
			<Arrow direction="right" translate={translate} setTranslate={setTranslate} />
		</div>
	);
};

export default Slider;
