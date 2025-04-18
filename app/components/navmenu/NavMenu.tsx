// components/NavMenu.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './NavMenu.module.css';

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Kombotron</div>

            <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                <li><Link href="/">Hem</Link></li>
                <li><Link href="/intro">Introduktion</Link></li>

                <li className={styles.hasSubmenu}>
                    <span>Statistik</span>
                    <ul className={styles.submenu}>
                        <li><Link href="/stats">Om statistiken</Link></li>
                        <li><Link href="/stats/numbers">Enskilda nummer</Link></li>
                        <li><Link href="/stats/grouping">Grupperingar</Link></li>
                        <li><Link href="/stats/winnings">Vinster</Link></li>
                    </ul>
                </li>
                <li><Link href="/create">Skapa system</Link></li>
                <li><Link href="/favorites">Dina system</Link></li>
            </ul>
        </nav>
    );
}