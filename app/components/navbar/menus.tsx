import Link from "next/link";

export function TopNavMenu() {
    return (
        <nav>
            <Link href="/">Hem</Link>
            <Link href="/intro">Introduktion</Link>
            <Link href="/stats">Statistik</Link>
            <Link href="/create">Skapa system</Link>
        </nav>
    );
}

export function StatsNavMenu() {
    return (
        <nav>
            <Link href="/stats/numbers">Enskilda nummer</Link>
            <Link href="/stats/pairofnumbers">Nummerpar</Link>
            <Link href="/stats/grouping">Grupperingar</Link>
        </nav>
    );
}