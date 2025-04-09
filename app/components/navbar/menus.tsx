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
                <ul>
                    <li><Link href="/">Hem</Link></li>
                    <li><Link href="/intro">Introduktion</Link></li>
                    <li><Link href="/stats">Statistik</Link></li>
                    <li><Link href="/create">Skapa system</Link></li>
                </ul>
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
                <Link href="/stats/winnings">Vinster</Link>
            </div>
        </nav>
    );
}