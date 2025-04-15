import { StatsNavMenu } from "@/app/components/navbar/menus";
import styles from "./grouping.module.css"

export default function GroupingStatsPage() {
    return (
        <div className={styles.allWrapper}>
            <StatsNavMenu />
            <h1>Statistik om grupperingar</h1>
        </div>
    );
}