import { Link } from "gatsby";
import React from "react";

const pageNotFound = () => {
	return (
		<div>
			<h1>Page not found</h1>
			<p>Oops! The page you are looking for is not exist anymore</p>
			<Link to="/">Go to Home</Link>
		</div>
	);
};

export default pageNotFound;
