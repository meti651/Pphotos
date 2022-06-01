import React from "react"

import * as Styles from "./prices-default.module.scss"

const Prices = ({ Image }) => {
  return (
    <div id={Styles.container}>
      <h1>Árak</h1>
      <div id={Styles.wrapper}>
        <div className={Styles.packs}>
          <h2>Alap csomag</h2>
          <div className={Styles.description}>
            <div>
              1 óra fotózás általad választott/közösen megbeszélt helyszínen
            </div>
            <div>30 db szerkesztett kép</div>
            <div>1 héten belüli képátadás</div>
            <div>Online képgaléria</div>
          </div>
          <div className={Styles.price}>ÁRA: 36000 Ft</div>
        </div>
        <div id={Styles.middle_image_wrapper}>
          <Image />
        </div>
        <div className={Styles.packs}>
          <h2>Extra csomag</h2>
          <div className={Styles.description}>
            <div>
            1.5-2 óra fotózás általad választott/közösen megbeszélt helyszínen
            </div>
            <div>50 db szerkesztett kép</div>
            <div>10 db előhívott fotó+ képkeret</div>
            <div>1 héten belüli képátadás</div>
            <div>Online képgaléria</div>
          </div>
          <div className={Styles.price}>ÁRA: 50000 Ft</div>
        </div>
      </div>
      <div id={Styles.studio}>
        Stúdió bérlés esetén az aktuális terem bérleti díja a fotózás díján
        felül, felszámításra kerül! (Ez kb. 8000ft)
      </div>
    </div>
  )
}

export default Prices
