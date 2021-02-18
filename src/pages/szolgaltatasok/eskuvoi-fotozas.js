import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Album from "../../components/landing-page/album";
import Prices from "../../components/subpages/prices-wedding";
import SEO from "../../components/seo";
import { useLocation } from "@reach/router";

import SubLayout from "../../components/subpages/subLayout";
import Content from "../../components/subpages/wedding/content";
import WeddingBox from "../../components/subpages/wedding/weddingBox";

const Wedding = () => {
	const data = useStaticQuery(graphql`
		{
			first: file(relativePath: { eq: "slider/wedding/slide1.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			second: file(relativePath: { eq: "slider/wedding/slide2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			third: file(relativePath: { eq: "slider/wedding/slide3.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			fourth: file(relativePath: { eq: "slider/wedding/slide4.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			fifth: file(relativePath: { eq: "slider/wedding/slide5.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			sixth: file(relativePath: { eq: "slider/wedding/slide6.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const { pathName } = useLocation();

	const pageMetadata = {
		title: "Esküvői fotózás",
		description:
			"Esküvői fotózás. Budapesten és egész Magyarországon belül. Garantáltam a legszebb pillanatok megörökítése a házasságkötésetekről",
		path: pathName,
	};

	const images = [data.second, data.fifth, data.fourth, data.first, data.third, data.sixth];

	return (
		<SubLayout title={"Esküvői fotózás"} slideImages={images}>
			<SEO pageMetadata={pageMetadata} />
			<Content />
			<Prices />
			<Album />
			<WeddingBox />
		</SubLayout>
	);
};

export default Wedding;
