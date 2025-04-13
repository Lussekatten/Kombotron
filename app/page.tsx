import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Image
            src="/bollar_01.png"
            alt="numbered balls"
            width={612}
            height={254}
          // priority
          />
      </main>
    </div>
  );
}
