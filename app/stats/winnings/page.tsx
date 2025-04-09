import { StatsNavMenu } from "@/app/components/navbar/menus";
import stats from '@/data/underlag-utdelningar.json';
import styles from "./winnings.module.css"

export default function WinningsStatsPage() {
    return (
        <>
            <StatsNavMenu />
            <div className={styles.tblResp}>
                <h1>Vinststatistik för 2025 (senaste dragningar)</h1>
                <table className={styles.tables}>
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
                            <td>{win["7-rätt-vinst"]} kr</td>
                            <td>{win["6-plus-antal"]}</td>
                            <td>{win["6-plus-vinst"]} kr</td>
                            <td>{win["6-rätt-antal"]}</td>
                            <td>{win["6-rätt-vinst"]} kr</td>
                        </tr>
                    )}
                </table>
            </div>
        </>
    );
}