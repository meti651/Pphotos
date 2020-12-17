import React from "react";

import Styles from "./content.module.scss";

import ContentImage1 from "../../../images/content/child/1.jpg";
import ContentImage2 from "../../../images/content/child/2.jpg";
import ContentImage3 from "../../../images/content/child/3.jpg";
import ContentImage4 from "../../../images/content/child/4.jpg";

const Content = () => {
    return (
        <div id={Styles.container}>
            <h1>Kedves Édesanyák, Édesapák!</h1>
            <div id={Styles.first_part}>
                <div id={Styles.paragraph}>Gyermekekről képet készíteni tudom, elég nagy kihívás. Aranyosan játszik, de mire odaérünk a telefonunkhoz már elfut, grimaszokat mutat, nem oda néz, bemozdul… </div>
                <div className={Styles.image_container} id={Styles.grid1}>
                    <div className={Styles.blur_border}>
                        <img src={ContentImage1} alt="kid" />
                    </div>
                </div>
                <div className={Styles.image_container} id={Styles.grid2}>
                    <div className={Styles.blur_border}>
                        <img src={ContentImage2} alt="kid" id={Styles.narrow_image}/>
                    </div>
                </div>
            </div>
            <div id={Styles.second_part}>
                <div>Ebben fogok én nektek segíteni, hogy minőségi és szuper aranyos képeket láthassatok a gyerkőcökről és büszkén adhassátok ajándékba akár a nagyszülőknek, barátoknak is. </div>
                <div>A gyermekfotózás számomra is mindig nagy kihívás, de ez benne a csodálatos. Külön öröm számomra mikor látom a büszkeséget a szülők arcán az átadott képek után. </div>
            </div>
            <div className={Styles.image_container} >
                <div className={Styles.blur_border}>
                    <img src={ContentImage3} alt="kid"/>
                </div>
            </div>
            
            <h2>Újszülött fotózás:</h2>
            <div>2 hetes korig érdemes elkészíteni az újszülött fotókat. Ezután a picurkák napról napra egyre jobban változnak, nyugodtabb alvós képekre ekkor van lehetőség. Szívesen elmegyek akár az otthonotokba, de stúdióba is jöhettek. Ruhákkal, kiegészítőkkel pedig igény esetén készülök nektek. </div>
            <div className={Styles.image_container} id={Styles.narrow_image}>
                <div className={Styles.blur_border}>
                    <img src={ContentImage4} alt="kid" />
                </div>
            </div>
            <div>Várlak benneteket sok szeretettel akár gyermeketek megszületésekor vagy a babás korszakban, születésnapokon, vagy bármely átlagos hétköznapi napon mikor kedvetek van kicsit kilépni a megszokottakból! </div>
        </div>
    )
}

export default Content;