import Link from "next/link";
import styles from './navbar.module.css';
import styles2 from '../../stats/stats.module.css';

export default function TopNavMenu() {

    return (
        <nav className={styles.topNavigationContainer}>

            <div className={styles.logoWrapper}>
                <Link className={styles.siteLogo} href="/">Kombotron</Link>
            </div>
            <div className={styles.navLinksWrapper}>
                <Link href="/">Hem</Link>
                <Link href="/intro">Introduktion</Link>
                <Link href="/stats">Statistik</Link>
                <Link href="/create">Skapa system</Link>
            </div>

        </nav>
    )
}


export function StatsNavMenu() {
    return (
        <nav className={styles2.statsNavigationContainer}>
            <div className={styles2.statsNavLinksWrapper}>
                <Link href="/stats/numbers">Enskilda nummer</Link>
                <Link href="/stats/pairofnumbers">Nummerpar</Link>
                <Link href="/stats/grouping">Grupperingar</Link>
            </div>
        </nav>
    );
}