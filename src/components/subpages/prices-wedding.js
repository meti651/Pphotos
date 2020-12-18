import React from 'react';

import Styles from "./prices-wedding.module.scss";

const Prices = () => {
    return(
        <div id={Styles.container}>
            <h1>Árak</h1>
            <div id={Styles.packages}>
                <div className={Styles.package} id={Styles.silver}>
                    <h2>Ezüst</h2>
                    <ul>
                        <li>1 szertartás fotózása</li>
                        <li>Csoportképek</li>
                        <li>Kreatív fotózás</li>
                        <li>Kb. 3 óra rendelkezésre állás</li>
                        <li>Kb. 120db retusált kép</li>
                    </ul>
                    <div className={Styles.price}>80.000 Ft/-</div>
                </div>
                <div className={Styles.package} id={Styles.gold}>
                    <h2>Arany</h2>
                    <ul>
                        <li>Készülődés</li>
                        <li>1 vagy 2 szertartás fotózása</li>
                        <li>Csoportképek</li>
                        <li>Kreatív fotózás</li>
                        <li>Lagzi fotózás (nyitótánc, vacsora- többi időkorláttól függ)</li>
                        <li>Kb. 8 óra rendelkezésre állás</li>
                        <li>Kb. 300db retusált kép</li>
                        <li><strong>AJÁNDÉK</strong> A4 fotókönyv</li>
                    </ul>
                    <div className={Styles.price}>160.000 Ft/-</div>
                </div>
                <div className={Styles.package} id={Styles.diamond}>
                    <h2>Gyémánt</h2>
                    <ul>
                        <li>1 szertartás</li>
                        <li>Csoportképek</li>
                        <li>Kreatív fotózás + fotózás másik napon is választott helyszínen/jegyesfotózás (Kb. 1-2 óra) Budapest vonzáskörzetében. (Vidék esetén választható más extra szolgáltatás)</li>
                        <li>Egész Lagzi fotózása hajnali 01:00-ig (táncok, party, játékok, tortavágás)</li>
                        <li>Kb. 12 óra rendelkezésre állás</li>
                        <li>Kb. 500db retusált kép</li>
                        <li>30db prémium előhívatott fotó</li>
                        <li>Fotóalbum (Extra nagy)</li>
                        <li>Slideshow a legjobb képekből (általatok választott zenék)</li>
                        <li><strong>EXTRA AJÁNDÉK:</strong> Egyedi készítésű díszdoboz + pendrive</li>
                    </ul>
                    <div className={Styles.price}>240.000 Ft/-</div>
                </div>
            </div>
        </div>
    )
}

export default Prices;
