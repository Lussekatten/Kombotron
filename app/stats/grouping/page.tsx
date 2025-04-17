import { StatsNavMenu } from "@/app/components/navbar/menus";
import styles from "./grouping.module.css"
import { getGroupingStats } from "@/app/actions";
import { Group } from "@/app/types";

export default function GroupingStatsPage() {

    const grpStats: Group[] = getGroupingStats();

    return (
        <>
            <StatsNavMenu />
            <div className={styles.allWrapper}>
                <div>
                    <h1>Statistik för grupperingar (de sista 20 dragningarna)</h1>
                </div>
                <div className={styles.tblWrapper}>
                    <table className={styles.tablesAverage}>
                        <thead>
                            <tr>
                                <th>Datum</th>
                                <th>L1/L2</th>
                                <th>Kombiantion</th>
                                <th>Nummergrupp(er)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grpStats.map(grp =>
                                <tr key={grp.id}>
                                    <td>{grp.date}</td>
                                    <td>{grp.dragning}</td>
                                    <td>{grp.original}</td>
                                    <td>{grp.processed}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}