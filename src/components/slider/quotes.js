import React, {useRef} from 'react'

import Styles from "./quotes.module.scss";

const Quotes = () => {
    const quotes = useRef([
        "A házasság 3 dologról szól: Emlékezni az összetartozásra, elfelejteni egymás hibáit és kitartani egymás mellett mindvégig.",
        "Néha az ember akkor értékeli igazán a pillanatot mikor már emlékké vált.",
        "Mikor fotózunk, valójában retúrjegyet veszünk a pillanathoz, ami elmúlt.",
        "Gyermekkor egyet jelent: Egyszerűség. Egy gyermek szemével nézni a világot egyszerűen gyönyörű.",
        "Néha azt kívánom bárcsak visszamehetnék az időbe… Nem változtatnék meg semmit csak újra élnem azt a pillanatot.",
        "A fénykép valójában a pillanat megállító gombja."
    ]);

    return (
        <div id={Styles.container}>
            {quotes.current.map((quote, index) => <p key={index}>{quote}</p>)}
        </div>
    )
}

export default Quotes; 
