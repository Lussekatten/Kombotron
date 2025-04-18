import { Roboto, Geist_Mono } from "next/font/google";
import styles from './favorites.module.css';


const roboto = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function MyFavoriteSystems() {
    return (
        <main className={styles.allWrapper}>
            <div className={styles.infoContents}>
                <h1 className={`${roboto.variable}`}>Här hittar du dina tidigare sparade system</h1>
                <h2>System 1 - (35 rader)</h2>
                <ul>
                <li>1-2-3-4-5-6-7</li>
                <li>2-3-4-5-6-7-8</li>
                <li>3-4-5-6-7-8-9</li>
                <li>osv...</li>
                </ul>
                <h2>System 2 - (35 rader)</h2>
                <ul>
                <li>1-2-3-4-5-6-7</li>
                <li>2-3-4-5-6-7-8</li>
                <li>3-4-5-6-7-8-9</li>
                <li>osv...</li>
                </ul>
                <h2>Osv.</h2>
           </div>
        </main>
    );
}