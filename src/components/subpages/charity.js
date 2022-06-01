import React from "react";

import * as Styles from "./charity.module.scss";

const Charity = ({text = "&#9829; Minden fotózás árának 1%-a az év végén felajánlásra kerül rászoruló gyermekek részére! &#9829;"}) => {
	return (
		<div id={Styles.container}>
			<div id={Styles.description}>
				{text}
			</div>
		</div>
	);
};

export default Charity;
