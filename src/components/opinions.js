import React, {useRef, useState, useEffect} from 'react'

import Styles from "./opinions.module.scss";

const Opinions = () => {
    const opinions = useRef([
        {message:"\"Petrához kismamafotózásra mentem, ahol gyönyörű, kreatív, de mégis meghitt képeket készített rólam. Szuperül tudtunk együtt dolgozni, nyitott volt az én ötleteimre is, amiket profin valósított meg. Örülök, hogy ő örökítette meg ezt a különleges időszakot.\"", person:"- Irtzl Eszti"},
        {message:"\"Petra nagyon belevaló, pörgős csaj, az időnyomás ellenére is tökéletes hangulatot biztosított az esküvőnk kreatív fotózásán! Jó érzéke van a beállításokhoz, hogy mindenki előnyös oldalát láthassa viszont az elkészült képeken! Szeretem azt a színvilágot, amit a fotói visszaadnak! Szuper élmény volt vele dolgozni, köszönjük szépen!\"", person: "- Molnár Petra"},
        {message:"\"Esküvői fotózásunkat Petra készítette. Az utolsó előtti hétben mentett meg minket, mivel az eredeti fotósunk lemondta, mostanra már úgy gondolom, hogy ennél nem is alakulhatott volna jobban. Nagyon aranyos és rendkívül ügyes, teljesen megvagyunk elégedve az eredménnyel. Őszintén tudom ajánlani Őt. Még egyszer mindent köszönünk\"", person:"- Görzsöny Orsolya"},
        {message:"\"Családi fotózáson voltunk Petrával és amilyen gyorsan jött az egész, annyira szuperül alakult minden, ha hónapokig szerveztük volna, akkor se sült volna el ilyen jól. Jó volt a hangulat, tökéletesen egy nevezőn voltak a 20 hónapos kislányommal, rugalmasan kezelte, hogy a kiscsaj határozott meg mindent és kihozta a maximumot a képekből. Megörökítette a pillanatokat, és pontosan olyan képeket látok most viszont, amilyenekre minden anya vágyik a családjáról.\"", person:"- Petra Solti-Porszász"},
        {message:"\"Szuper hangulatban telt a fotózás, Petra rugalmas volt és a képeket nagyon gyorsan elkészítette, várjuk a jövő évi fotózásunkat is!\"", person: "- Kiss Berni"},
        {message:"\"Petra két gyermekemet fotózta. A képek gyönyörűek lettek Petra rendkívül türelmes, kreatív és nagyszerű érzékkel fényképezett. A kis két évesem izgő-mozgó volt, de csodás képek készültek. Mindenkinek csak ajánlani tudom Hamarosan újra találkozunk ebben biztos vagyok köszönjük.\"", person: "- Tuba Krisztina"},
        {message:"\"Csak nézem a képeket csak nézem és mindet imádom. Évekkel ezelőtt sose gondoltam volna, hogy néhány buli után életem fontos pillanataiban te leszel a legnagyobb segítség, a hála szó kevés ide azt hiszem. Köszönöm.\"", person:"- Simon-Fülöp Melinda"}
    ])

    const [displayedOpinions, setDisplayedOpinions] = useState([]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * Math.floor(6));
        setDisplayedOpinions(displayedOpinions => randomIndex === 5 ? [opinions.current[randomIndex], opinions.current[0]] : [opinions.current[randomIndex], opinions.current[randomIndex + 1]])
    }, [])

    return(
        <div id={Styles.container}>
            {displayedOpinions.map((opinion, index) => <div key={index}><p className={Styles.message}>{opinion.message}</p><p className={Styles.person}>{opinion.person}</p></div>)}
        </div>
    )
}

export default Opinions;
