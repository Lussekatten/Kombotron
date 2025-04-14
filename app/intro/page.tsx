import { Roboto, Geist_Mono } from "next/font/google";
import styles from './intro.module.css';


const roboto = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function IntroPage() {
    return (
        <main className={styles.allWrapper}>
            <div className={styles.infoContents}>
                <h1 className={`${roboto.variable}`}>Varmt välkommen</h1>
                <h2>Vad kan man göra på denna sajt?</h2>
                <p>Denna sajt riktar sig till alla lotto entusiaster som vill öka sina chanser till vinst genom
                    att spela smartare. Det finns huvudsakligen två viktiga saker man kan göra.
                    Först gör man en grundlig analys av historiska data (data från föregående dragningar).
                    Sedan bygger man en så kallad "reducerad system" (se förklaringen längre ner), där olika lottorader skapas för att
                    erbjuda dig de bästa chanserna till vinst.</p>
                <h2>Hur spelar man på lotto i det svenska lotterisystemet?</h2>
                <p>I det svenska lotterisystemet använder man kombinationer av 7 siffror av 35 möjliga.
                    En kombination kan t.ex vara 1-5-6-14-25-31-38, en annan 14-25-28-30-31-33-34.
                    Varje kombination kostar 3 kr att lämna in (spela).</p>
                <h2>Vad är ett reducerat system?</h2>
                <p>Ett reducerat system är ett sätt att spela på som kostar mindre och ger en viss utfallsgaranti.
                    Om man inte spelar system och väljer att slumpa fram alla sina rader, kommer man att ha mindre
                    chans att pricka in den kommande kombinationen. Detta vågar jag hävda, trots att vissa påstår
                    att det är exakt samma chans till vinst för varje rad som lämnas in. Jag ska illustrera med ett
                    exempel vad jag menar.<br />
                    Två lotto-entusiaster (vi kallar dem spelare-A och spelare-B) spelar på lotto varje vecka.
                    Spelare-A vet har ingen strategi när hen spelar, medan spelare-B använder sig av vår tjänst och "smarta system".
                    Spelare-A lämnar in varje vecka följande kombinationer: 1-2-3-4-5-6-7, 2-3-4-5-6-7-8, 3-4-5-6-7-8-9, osv,
                    totalt 29 kombinationer (den sista är 29-30-31-32-33-34-35)<br />
                    Spelare-B vet dock (genom att kolla på statistiken på vår sajt) att sannolikheten för att alla siffror ska vara
                    konsekutiva (dvs. i följd) är minimal. Detta har inträffat ungefär 1 gång på 6.000 dragningar.
                    Därför, använder Spelare-B olika "filter" (du hittar dessa under menyfliken "Skapa system") som minimerar antalet
                    möjliga kombinationer allt eftersom de aktiveras. När spelare-B blivit klar med att filtera bort oönskade kombinationer,
                    gör hen sedan ett reducerat system av återstående kombinationer. Resultatet blir ett antal kombinationer (20-55 st.),
                    som är organiserade på så sätt, att ifall alla filter valdes korrekt, garanterar en minsta vinst på 5 korrekta siffror av 7,
                    oavsett.</p>
                <h2>Vad är en "spik" och hur viktigt är det att använda dem?</h2>
                <p>Spikar kallar vi de siffror som förekommer i varje kombination som skapas. Det är din uppgifgt att välja dessa siffror.
                    Genom att använda dem miskar antalet återstående möjliga kombinationer avsevärt.</p>
                <ul>
                    <li>Om man väljer en enda "spik-siffra" minskar antalet återstående kombintioner från 6.724.520 st. till 1.344.904 st.</li>
                    <li>Om man väljer en andra "spik-siffra" minskar antalet återstående kombintioner från 1.344.904 st. till 237.336 st.</li>
                    <li>Om man väljer en tredje "spik-siffra" minskar antalet återstående kombintioner från 237.336 st. till 35.960 st.</li>
                </ul>
                <p>Så det är VÄLDIGT viktigt att hitta dessa 3 siffror. Återigen, kan statistiken vara användbar när man väljer dessa
                    "spikar" inför nästa dragning.</p>
            </div>
        </main>
    );
}