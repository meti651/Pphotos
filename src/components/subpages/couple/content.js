import React from 'react';

import ContentImage from "../../../images/content/couple/1.jpg";

import Styles from "./content.module.scss";

const Content = () => {
    return (
        <div id={Styles.container}>
            <div className={Styles.strong}>Lepkék, első csók, titkos helyszínek, összenézések, viták, a nagy kibékülés, elfogadás és szeretet…</div>
            <div id={Styles.content}>
                <div className={Styles.paragraph}>
                    <p>Úgy gondolom most eszedbe jutott valami ezekről a szavakról a saját kapcsolatodból, de a legszebb az, hogy mindenkinek teljesen mást-és mást jelentenek.</p>
                    <p>Hiszen a kapcsolatod egyedi és senkiével össze nem hasonlítható.</p>
                    <p>Ezt az egyediséget és a kettőtök közötti köteléket örökítem én meg.</p>
                </div>
                <div className={Styles.image_container}>
                    <div className={Styles.blur_border}>
                        <img src={ContentImage} alt="couple" />
                    </div>
                </div>
                <div className={Styles.paragraph}>
                    <p>A fotózások lehetnek a szabadban vagy stúdióban is, bár a személyes kedvenceim páros fotózásnál inkább a kintiek, hiszen ott sok sétálós, pados, és természetközeli képet tudunk készíteni. Ruházat szempontjából pedig az összhangot tartsátok szem előtt.</p>
                </div>
            </div>
            <div className={Styles.strong}>Akár egy laza romantikus fotózásra vágytok, akár a boldogító igen előtt vagytok szeretettel várlak benneteket!</div>
        </div>
    )
}

export default Content;
