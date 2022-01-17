import React from "react";
import Footer from "./footer";

import Header from "./header";
import * as Styles from "./layout.module.scss";

const Layout = ({ children, onTop, isIndex }) => {
	return (
		<div id={Styles.container}>
			<Header onTop={onTop} isIndex={isIndex} />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
