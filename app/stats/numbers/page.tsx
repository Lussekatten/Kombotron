import { StatsNavMenu } from "@/app/components/navbar/menus";
import stats from '@/data/latest1000drawings.json';
import styles from "./numbers.module.css"
import { getAbsencePatternForNumber, getAbsenceStatsForNumber, getStatsForNumber } from "@/app/actions";

export default function NumbersStatsPage() {
    const numberOneCount = getStatsForNumber('2');
    const maxAbsence = getAbsenceStatsForNumber('2');
    const absencePattern = getAbsencePatternForNumber('2');
    return (
        <div className={styles.allWrapper}>
            <StatsNavMenu />
            <h1>Statistik om enskilda nummer</h1>
            <h2>Statistik för nummer 1</h2>
            <ul>
                <li>Siffran 1 har kommit upp {numberOneCount} ggr. de senaste {stats.length} dragningarna.</li>
                <li>Längsta frånvaro period hittad: {maxAbsence} dragningar.</li>
                <li>Mönstret de senaste 100 dragningarna är: {absencePattern}</li>
            </ul>
        </div>
    );
}