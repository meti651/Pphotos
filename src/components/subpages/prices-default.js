import React from 'react';

import Styles from "./prices-default.module.scss";

const Prices = () => {
    return(
        <div id={Styles.container}>
            <h1>Árak</h1>
            <div id={Styles.wrapper}>
                <div>
                    <h2>Alap csomag</h2>
                    <div className={Styles.description}>
                        <div>1 óra fotózás általad választott/közösen megbeszélt helyszínen</div>
                        <div>25db retusált kép – professzionális egyedi kézi szerkesztés</div>
                        <div>7 napon beüli képátadás online felületen</div>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <h2>Extra csomag</h2>
                    <div className={Styles.description}>
                        <div>1,5-2 óra fotózás általad választott/közösen megbeszélt helyszínen</div>
                        <div>40db retusált kép- professzionális egyedi kézi készítés</div>
                        <div>7 napon belüli átadás online</div>
                        <div>10db prémium előhívatott fotó (postázva)</div>
                        <div>1db AJÁNDÉK képkeret</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;
