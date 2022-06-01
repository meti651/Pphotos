import React from "react"

import * as Styles from "./album.module.scss"

const Album = () => {
  return (
    <div id={Styles.container}>
      <h1>Fotóalbum</h1>
      <div id={Styles.description}>
        <div id={Styles.paragraph}>
          <p>
            Ha szeretnéd emlékeidet kézzelfoghatóvá tenni, nálam minden
            szolgáltatás igénybevétele után lehetőség van erre,fotóalbum
            formájában.
          </p>
          <p>
            Az albumokat minden esetben egyediség jellemzi, én készítem őket egy
            album szerkesztő szoftver segítségével.
          </p>
          <p>
            Akár magatoknak akár mások számára ajándéknak, minden esetben
            tökéletes választás!
          </p>
        </div>
        <div className={Styles.image_container}>
          <div className={Styles.image}></div>
        </div>
      </div>
      <div id={Styles.prices}>
        <div className={Styles.pack}>
          <h2>Nagy fotóalbum</h2>
          <div className={Styles.description}>
            Klasszikus A4-es formátumú, ideális lehet családi fotózásoknál,
            pároknak és esküvőkön.
          </div>
          <div className={Styles.price}>25000 Ft/-</div>
        </div>
      </div>
      <div id={Styles.last_part}>
        <p>Több fotóalbum rendelése esetén garantált kedvezmény!</p>
        <p>Minden fotóalbum mellé AJÁNDÉK 5 db előhívott kép!</p>
      </div>
    </div>
  )
}

export default Album
