import React, { useEffect, useState } from "react";

import Styles from "./content.module.scss";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Content = () => {
	const images = useStaticQuery(graphql`
		{
			first: file(relativePath: { eq: "content/mum/1.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			second: file(relativePath: { eq: "content/mum/2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			third: file(relativePath: { eq: "content/mum/3.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			fourth: file(relativePath: { eq: "content/mum/4.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
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
			else if (window.innerWidth <= 1024 && window.innerWidth > 768) setImageWidthProportion(window.innerWidth / 1500);
			else if (window.innerWidth <= 768 && window.innerWidth > 480) setImageWidthProportion(window.innerWidth / 1024);
			else if (window.innerWidth <= 480) setImageWidthProportion(window.innerWidth / 768);
		};

		window.addEventListener("resize", resizeHandler);
		resizeHandler();
		return () => window.removeEventListener("resize", resizeHandler);
	}, []);

	return (
		<div id={Styles.container}>
			<h1>Kedves Kismamák!</h1>
			<div id={Styles.first_part}>
				<div className={Styles.text}>
					Minden nő életének egyik legszebb időszaka ez a bizonyos 9 hónap. Kisbabádat a szíved alatt hordani hatalmas
					élmény és hidd el, ez a kisugárzásodon is meglátszik
				</div>
				<div className={Styles.image_container}>
					<div
						className={Styles.blur_border}
						style={{ width: `${450 * images.fourth.childImageSharp.fluid.aspectRatio * imageWidthProportion}px` }}
					>
						<Img fluid={images.first.childImageSharp.fluid} alt="mum" />
					</div>
				</div>
				<div className={Styles.text}>
					Kismamákkal képeket alkotni mindig nagy öröm számomra, hiszen egy olyan ősi erőt érzek bennük, mely semmihez
					sem fogható. Ekkor teszik meg első lépéseiket az édesanyává válásuk útján és látom rajtuk a szeretetet melyet
					a még meg nem született gyermekük iránt éreznek.
				</div>
			</div>
			<div id={Styles.second_part}>
				<div className={Styles.image_container}>
					<div
						className={Styles.blur_border}
						style={{ width: `${450 * images.fourth.childImageSharp.fluid.aspectRatio * imageWidthProportion}px` }}
					>
						<Img fluid={images.second.childImageSharp.fluid} alt="mum" />
					</div>
				</div>
				<div className={Styles.image_container}>
					<div
						className={Styles.blur_border}
						style={{ width: `${450 * images.fourth.childImageSharp.fluid.aspectRatio * imageWidthProportion}px` }}
					>
						<Img fluid={images.third.childImageSharp.fluid} alt="mum" />
					</div>
				</div>
			</div>
			<div className={Styles.paragraph}>
				<h2>És hogy mikor érdemes elkészíteni a képeket? </h2>
				<div>
					A 7-8. hónap a legideálisabb, ekkor már elég nagy a pocak a látványos kismama fotókhoz. Persze ez egyénenként
					is változik, a lényeg, hogy kipihent legyél, erre pedig az utolsó hetek már nem biztos, hogy alkalmasak
					lesznek.
				</div>
			</div>
			<div className={Styles.paragraph}>
				<h2>Milyen helyszíneken fogunk fotózni?</h2>
				<div>
					Lehet kültéri fotózás is, vagy akár stúdióban (különösen fehérneműs, intimebb képeknél), de az otthonodba is
					szívesen ellátogatok!
				</div>
			</div>
			<div className={Styles.paragraph}>
				<h2>Mit hozzak magammal?</h2>
				<div>
					Lehetőleg olyan ruhákat hozz melyek kihangsúlyozzák a pocakot. Nyugodtan lehet nálad több szett is,
					természetesen van lehetőség átöltözésre. Ezen kívül a kreatív fotókért elhozhatod még az ultrahangos képet a
					babáról, vagy esetleg kiscipőt, és még bármilyen számodra fontos kiegészítőt.
				</div>
			</div>
			<div id={Styles.last_paragraph}>
				<div className={Styles.paragraph}>
					<h2>Apa is jöhet?</h2>
					<div>
						Természetesen! Örömmel várom őt is! De ha nem sikerül rávenni, akkor az is lehet egy kompromisszumos
						megoldás, ha a fotózás közben egy 10 percre „ugrik csak be”. Ennyi elegendő is pár apás fotó elkészítéséhez
						is.
					</div>
				</div>
				<div className={Styles.image_container}>
					<div
						className={Styles.blur_border}
						style={{ width: `${450 * images.fourth.childImageSharp.fluid.aspectRatio * imageWidthProportion}px` }}
					>
						<Img fluid={images.fourth.childImageSharp.fluid} alt="mum" />
					</div>
				</div>
			</div>
			<div id={Styles.last_part}>
				<p>Várlak sok szeretettel! Örökítsük meg együtt életed legszebb és legfontosabb pillanatát!</p>
			</div>
		</div>
	);
};

export default Content;
