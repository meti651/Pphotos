import React from "react"

import * as Styles from "./charity.module.scss"

const Charity = ({ text }) => {
  return (
    <div id={Styles.container}>
      <div id={Styles.description}>{text}</div>
    </div>
  )
}

export default Charity
