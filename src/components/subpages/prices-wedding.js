import React from "react"

import * as Styles from "./prices-wedding.module.scss"
import * as AlbumStyles from "../landing-page/album.module.scss"
import * as WeddingBoxStyles from "./wedding/weddingBox.module.scss"
import Charity from "./charity"

const Prices = () => {
  return (
    <div id={Styles.container}>
      <h1>Árak</h1>
      <div id={Styles.packages}>
        <div className={Styles.wedding_package} id={Styles.silver}>
          <h2>Ezüst</h2>
          <ul>
            <li>Összesen 3 óra rendelkezésre állás</li>
            <li>1 szertartás fotózása</li>
            <li>Csoportképek</li>
            <li>1 óra kreatív fotózás</li>
            <li>120 db szerkesztett fotó</li>
          </ul>
          <div className={Styles.price}>ÁRA: 105000 Ft</div>
        </div>
        <div className={Styles.wedding_package} id={Styles.gold}>
          <h2>Arany</h2>
          <ul>
            <li>8 óra rendelkezésre állás</li>
            <li>Készülődés</li>
            <li>Szertartások fotózása</li>
            <li>Csoportképek</li>
            <li>Dekor, helyszín fotózása</li>
            <li>Aznapi kreatív fotózás</li>
            <li>Lagzi fotózás (nyitótánc, vacsora- többi időkorláttól függ)</li>
            <li>300 db szerkesztett kép</li>
            <li>Online képgaléria</li>
            <li>
              <strong>AJÁNDÉK</strong> A4 fotókönyv
            </li>
          </ul>
          <div className={Styles.price}>ÁRA: 200000 Ft</div>
        </div>
        <div className={Styles.wedding_package} id={Styles.diamond}>
          <h2>Gyémánt</h2>
          <ul>
            <li>11 óra rendelkezésre állás</li>
            <li>Készülődés</li>
            <li>Szertartások fotózása</li>
            <li>Csoportképek</li>
            <li>Aznapi kreatív fotózás</li>
            <li>Dekor, helyszín fotózása</li>
            <li>
              Egész Lagzi fotózása hajnali 01:00-ig (táncok, party, játékok,
              tortavágás)
            </li>
            <li>Online képgaléria</li>
            <li>500 db szerkesztett kép</li>
            <li>30 db prémium 10x15-ös előhívott fotó</li>
            <li>
              <a href={`#${AlbumStyles.container}`}>A4 prémium fotóalbum</a>
            </li>
            <li>
              <strong>
                <a href={`#${WeddingBoxStyles.container}`}>EXTRA AJÁNDÉK:</a>
              </strong>{" "}
              Egyedi készítésű díszdoboz + pendrive
            </li>
          </ul>
          <div className={Styles.price}>ÁRA: 260000 Ft</div>
        </div>
      </div>
      <div className={Styles.plus_info}>
        <Charity
          text={
            <>
              <p>
                Esküvői fotózást Budapest 120 km-es vonzáskörzetében vállalok.
              </p>
              <p>
                Külön napi kreatív fotózás Budapest vonzáskörzetében lehetséges.
                Ennek kedvezményes ára: 20000 Ft.
              </p>
              <p>
                Kiszállási díj Budapesten INGYENES, máshol a választott csomag
                függvénye.
              </p>
              <p>
                Nyers képek nem kerülnek átadásra, a fotókat minden esetben
                szerkesztem.
              </p>
            </>
          }
        />
      </div>
    </div>
  )
}

export default Prices
