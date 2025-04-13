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
                    <p>Denna sajt erbjuder statistisk data för att hjälpa dig (användaren) att välja vissa siffror inför nästa
                        lottodragning. Det är upp till dig att bilda en egen uppfattning om hur pass användbar denna statistik
                        egentligen är. Vissa påstår att varje nummer har en lika stor chans att dyka upp nästa gång.
                        Jag vill påstå det motsatta.
                    </p>
                    <h2>Mina iakttagelser</h2>
                    <p>Jag har länge misstänkt att vi lever i en någorlunda balanserad universum. Människor har gjort viktiga
                        upptäckter sedan vi lämnade grottan. Många vetenskapliga grenar har sett dagens ljus, bland annat matematik och fysik.
                        Vi kan inte förklara riktigt vad det är som gör att krona/klave har en så gott som identisk frekvens när
                        man singlar slant väldigt/oändligt många gånger. Men jag försökte se ifall samma företeelse inträffar även när antalet utfall är mycket
                        större än bara 50/50.
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
                            Problemet är att ingen vet exakt när och på viket sätt detta kommer att ske.
                        </li>
                        <li><b>Tolkning av staplarna</b> - För att underlätta visualiseringen har jag presenterat datan som en
                            stapeldiagram. Diagramet visar frånvaroperioder for alla dessa 35 nummer.
                            Varje stapel i diagramet visar längden på frånvaron, dvs. hur många dragningar det varit innan siffran
                            dykt upp igen. Om stapeln är noll (det ser man både här och där), betyder det att siffran dykt upp 2 ggr.
                            på raken. Ett större gap, på två staplar betyder att siffran kommit upp tre gånger på raken.
                        </li>
                        <li><b>Grupperingar</b> - Av intresse kan vara även hur grupperna av intilliggande siffror dyker upp. Detta kan man följa
                            i undermenyn "Grupperingar".</li>
                    </ul>
                </div>
            </main>
        </>
    );
}