import React from 'react';

import Styles from "./prices-default.module.scss";

const Prices = ({Image}) => {
    return(
        <div id={Styles.container}>
            <h1>Árak</h1>
            <div id={Styles.wrapper}>
                <div className={Styles.package}>
                    <h2>Alap csomag</h2>
                    <div className={Styles.description}>
                        <div>1 óra fotózás általad választott/közösen megbeszélt helyszínen</div>
                        <div>25db retusált kép – professzionális egyedi kézi szerkesztés</div>
                        <div>7 napon beüli képátadás online felületen</div>
                    </div>
                    <div className={Styles.price}>25.000 Ft/-</div>
                </div>
                <div id={Styles.middle_image_wrapper}>
                    <Image/>
                </div>
                <div className={Styles.package}>
                    <h2>Extra csomag</h2>
                    <div className={Styles.description}>
                        <div>1,5-2 óra fotózás általad választott/közösen megbeszélt helyszínen</div>
                        <div>40db retusált kép- professzionális egyedi kézi készítés</div>
                        <div>7 napon belüli képátadás online felületen</div>
                        <div>10db prémium előhívatott fotó (postázva)</div>
                        <div>1db AJÁNDÉK képkeret</div>
                    </div>
                    <div className={Styles.price}>32.000 Ft/-</div>
                </div>
            </div>
            <div id={Styles.studio}>Stúdió bérlés esetén az aktuális terem bérleti díja a fotózás díján felül, felszámításra kerül! (Ez kb. 8000ft)</div>
        </div>
    )
}

export default Prices;
