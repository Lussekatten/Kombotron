import { StatsNavMenu } from "@/app/components/navbar/menus";
import stats from '@/data/underlag-utdelningar.json';
import styles from "./winnings.module.css";
import getAverageStats from "@/app/actions";

export default function WinningsStatsPage() {
    const averages: number[] = getAverageStats();
    const formatter = new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
    });
    return (
        <>
            <div className={styles.tblResp}>
                <h1>Vinststatistik för 2025 (senaste dragningar)</h1>
                <table className={styles.tablesMain}>
                    <thead>
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
                    </thead>
                    <tbody>
                        {stats.map(win =>
                            <tr key={win.id}>
                                <td>{win.datum}</td>
                                <td>{win.dragning}</td>
                                <td>{win["7-rätt-antal"]}</td>
                                <td>{formatter.format(+win["7-rätt-vinst"])}</td>
                                <td>{win["6-plus-antal"]}</td>
                                <td>{formatter.format(+win["6-plus-vinst"])}</td>
                                <td>{win["6-rätt-antal"]}</td>
                                <td>{formatter.format(+win["6-rätt-vinst"])}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <h3>Genomsnittliga värden:</h3>
                <table className={styles.tablesAverage}>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </>
    );
}