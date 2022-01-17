import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from "react";
import * as Styles from "./weddingBox.module.scss";
import Img from "gatsby-image";

const WeddingBox = () => {
	const image = useStaticQuery(graphql`
		{
			data: file(relativePath: { eq: "weddingBox.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 600, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const [imageWidthProportion, setImageWidthProportion] = useState();

	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth > 1024) setImageWidthProportion(window.innerWidth / 1920);
			else if (window.innerWidth <= 1024 && window.innerWidth > 420) setImageWidthProportion(window.innerWidth / 924);
			else if (window.innerWidth <= 420) setImageWidthProportion(window.innerWidth / 650);
		};

		window.addEventListener("resize", resizeHandler);
		resizeHandler();
		return () => window.removeEventListener("resize", resizeHandler);
	}, []);

	return (
		<div id={Styles.container}>
			<div id={Styles.text}>
				<h1>Prémium minőségű fadoboz</h1>
				<div>
					<p>Az országban szinte egyedülállóként, lehetőség van exkluzív fadobozban kérni az esküvői képeiteket!</p>
					<p>A doboz tartalma: 30 db prémium minőségű előhívott kép és fa pendrive az összes fotóval.</p>
				</div>
				<div>
					<p>Gyémánt esküvői csomag mellé 1 db AJÁNDÉK.</p>
					<p>Minden további csomaghoz pedig 9900 Ft darabáron kérhető!</p>
				</div>
			</div>
			<div className={Styles.image_wrapper}>
				<div className={Styles.blur_border}>
					<div
						className={Styles.image}
						style={{ width: `${image.data.childImageSharp.fluid.aspectRatio * 450 * imageWidthProportion}px` }}
					>
						<Img fluid={image.data.childImageSharp.fluid} className={Styles.wide_image} alt="portrait" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeddingBox;
