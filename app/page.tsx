import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="balls">
        <Image className={styles.myImg}
          src="/bollar_01.png"
          alt="numbered balls"
          width={612}
          height={254}
        // priority
        />
      </div>
      <main className={`${styles.main} ${styles.cards}`}>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
      </main>
    </div>
  );
}
