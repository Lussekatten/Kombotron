import { StatsNavMenu } from "@/app/components/navbar/menus";
import stats from '@/data/underlag-utdelningar.json';
import styles from "./winnings.module.css"
import getAverageStats from "@/app/actions";

export default function WinningsStatsPage() {
    const averages: number[] = getAverageStats();
    const formatter = new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
      });
    return (
        <>
            <StatsNavMenu />
            <div className={styles.tblResp}>
                <h1>Vinststatistik för 2025 (senaste dragningar)</h1>
                <table className={styles.tablesMain}>
                    <tr>
                        <th>Datum</th>
                        <th>Dragning</th>
                        <th>Styck</th>
                        <th>7-rätt</th>
                        <th>Styck</th>
                        <th>6-rätt + 1</th>
                        <th>Styck</th>
                        <th>6-rätt</th>
                    </tr>
                    {stats.map(win =>
                        <tr>
                            <td>{win.Datum}</td>
                            <td>{win.Dragning}</td>
                            <td>{win["7-rätt-antal"]}</td>
                            <td>{formatter.format(+win["7-rätt-vinst"])}</td>
                            <td>{win["6-plus-antal"]}</td>
                            <td>{formatter.format(+win["6-plus-vinst"])}</td>
                            <td>{win["6-rätt-antal"]}</td>
                            <td>{formatter.format(+win["6-rätt-vinst"])}</td>
                        </tr>
                    )}
                </table>
                <table className={styles.tablesAverage}>
                    <h3>Genomsnittliga värden:</h3>
                    <tr>
                        <td>7-rätt</td>
                        <td>{formatter.format(+averages[0])}</td>
                    </tr>
                    <tr>
                        <td>6-rätt + 1</td>
                        <td>{formatter.format(+averages[1])}</td>
                    </tr>
                    <tr>
                        <td>6-rätt</td>
                        <td>{formatter.format(+averages[2])}</td>
                    </tr>
                </table>
            </div>
        </>
    );
}