import { Roboto, Geist_Mono } from "next/font/google";
import styles from './intro.module.css';


const roboto = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function IntroPage() {
    return (
        <main className={styles.allWrapper}>
            <h1 className={`${roboto.variable}`}>Intro sidan</h1>
        </main>
    );
}