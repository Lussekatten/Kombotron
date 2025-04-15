import { StatsNavMenu } from "@/app/components/navbar/menus";
import styles from "./grouping.module.css"
import { getGroupingStats } from "@/app/actions";

export default function GroupingStatsPage() {

    const grpStats = getGroupingStats();

    return (
        <>
            <StatsNavMenu />
            <div className={styles.allWrapper}>
                <h1>Statistik om grupperingar</h1>
                <ul>{
                    grpStats.map(grp => (
                        <li>{grp}</li>
                    ))
                }
                </ul>
            </div>
        </>
    );
}