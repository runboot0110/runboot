import Image from "next/image";
import Link from "next/link";
import RootNavLinks from "../components/RootNavLinks";
import styles from "../styles/home.module.css";
export default function Home() {
  return (
    <main>
      <div className={styles.headingWrap}>
        <div className={styles.heading}>
          <div className={styles.startlink}>Get started by editing <a href="https://runboot-nine.vercel.app/" className={styles.startlinkA}>runboot-nine.vercel.app</a></div>
          <div className={styles.headeingLogo}><span className={styles.headeingLogoSpan}>by</span> Runboot</div>
        </div>
        <div className={styles.logoWrap}>
          <div className={styles.logo}>
            Runboot.<span>jp</span>
          </div>
        </div>
        <div className={styles.rootNavLinksWrap}>
          <RootNavLinks />
        </div>
      </div>
    </main>
  );
}
