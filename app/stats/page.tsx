import { Roboto } from "next/font/google";
import { StatsNavMenu } from "../components/navbar/menus";
import styles from './stats.module.css';

const roboto = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function StatsPage() {
    return (
        <>
            <StatsNavMenu />
            <main className={styles.allWrapper}>
                <div className={styles.infoContents}>
                    <h1 className={`${roboto.variable}`}>Statistik sidan</h1>
                    <h2>Syfte</h2>
                    <p>Denna sajt erbjuder statistisk data för att hjälpa dig (användaren) att maximera dina chanser till vinst genom
                        att välja vissa siffror inför nästa lottodragning. Det är upp till dig att bilda en egen uppfattning om hur pass
                        användbar denna statistik egentligen är. Vissa påstår att varje nummer har en lika stor chans att dyka upp nästa gång.
                        Jag vill påstå det motsatta.
                    </p>
                    <h2>Mina iakttagelser</h2>
                    <p>Jag har länge misstänkt att vi lever i en någorlunda balanserad universum. Människor har gjort viktiga
                        upptäckter sedan vi lämnade grottan. Många vetenskapliga grenar har sett dagens ljus, bland annat matematik och fysik.
                        Vi kan inte förklara riktigt vad det är som gör att krona/klave har en så gott som identisk frekvens när
                        man singlar slant väldigt/oändligt många gånger. Det jag försökte upptäcka är ifall samma företeelse (dvs. förekomsten
                        av balanserad slump) inträffar även när antalet utfall är mycket större än bara 50/50 (när man singlar slant).
                        Nedan följer en sammanfattning av mina iakttagelser:
                    </p>
                    <ul>
                        <li><b>Likartad frekvens</b> - Det verkar som alla nummer i lotteriet strävar efter en jämvikt, att dyka upp lika många
                            gånger som alla andra nummer, nämligen var 5:e gång, i snitt. Under menyn <b>"Enskilda nummer"</b> kan du välja ett visst nummer och få fram
                            data om just det numret. Perioden som finns inlagd sträcker sig över drygt 1.000 dragningar.
                            Med nuvarande format (4 dragningar i veckan, 2 på onsdag och 2 på lördag) motsvarar
                            detta en tidsperiod på runt 5 år. Denna period är dock inte kontinuerlig, då jag saknar 2 års data,
                            men det spelar egentligen lite roll, då även den befintliga datan räcker gott och väl för att
                            komma fram till vissa slutsatser. Det skiljer en del mellan den minst frekventa siffran, nr. 1 (179 ggr)
                            och den mest frekventa, nr. 26 (221 ggr). På sikt (flera år), kommer även siffran 1 att "komma ikapp", det är jag övertygad om.
                            Problemet är att ingen vet exakt när och på viket sätt detta kommer att ske.<br />
                            <b>Tolkning av staplarna</b> - För att underlätta visualiseringen har jag presenterat datan som en
                            stapeldiagram. Diagramet visar frånvaroperioder for alla dessa 35 nummer.
                            Varje stapel i diagramet visar längden på frånvaron, dvs. hur många dragningar det har varit sedan respektive siffran
                            dykt upp senast. Om stapeln har längden noll (det ser man både här och där), betyder det att siffran dykt upp 2 ggr.
                            på raken. Ett större gap, på t.ex. två staplar, betyder att siffran kommit upp tre gånger i följd.
                        </li>
                        <li><b>Begränsad följd</b> - Om ett och samma nummer dyker up i 3 konsekutiva dragningar är det ytterst osannolikt att
                            numret kommer upp även en fjärde gång. Att välja bort ett nummer inför nästa dragning är ett sätt att minimera antalet
                            kombinatiner som man vill ha kvar (de mest lovande).
                        </li>
                        <li><b>Grupperingar</b> - Av intresse kan vara även hur grupperna av konsekutiva siffror dyker upp. Detta kan man följa
                            i undermenyn "Grupperingar". Att välja bort kombinationer med grupperingar större än 2 (t.ex. 2-3-4, eller 12-13-14-15) är
                            ett annat sätt att sålla bort oönskade kombinationer. Procentsatserna talar sitt tydliga språk. Chansen att en lottorad har 3
                            nummer i följd är 10,3% medan chansen att få en lottorad med 4 nummer i följd är så lite som 1,16%. Ett par konsekutiva siffror
                            dyker däremot upp rätt ofta, i nära 70% av fallen. Därför rekommenderar jag att man inte bygger system med grupper av tre
                            eller fler siffror i rad.
                        </li>
                        <li><b>Omfång</b> - Jag har även undersökt hur kombinationerna ser ut med hänsyn till avstånd/spannet mellan lägsta siffran och högsta
                            siffran i kombinationen. Om kombinationen är t.ex. 1-2-14-17-21-23-31 så är avståndet 30 (31 minus 1 blir 30).
                            Jag kunde inte utesluta något "mönster" (dvs. filtrera bort osannolika kombinationer) eftersom fördelningen mellan kombinationer med
                            kort spann och de med långt spann blir så förbluffande jämn.
                        </li>
                    </ul>
                    <h2>Slutsatser</h2>
                    <p>När du bygger system med hjälp av vår sajt, gör så här:<br />
                        1. Välj 3 olika siffror som du vill ha med i alla dina kombinationer.<br />
                        2. Kör med storlek 2 på grupperingar.<br />
                        3. Välj vilka siffror som inte ska vara med (max. 6 st, komma separerade)<br />
                        4. Klicka på "Skapa system"-knappen. Ett system på 35-45 rader kommer att byggas upp som garanterar dig minst 1 rad med 5-rätt (men oftast blir det fler).
                    </p>
                </div>
            </main>
        </>
    );
}