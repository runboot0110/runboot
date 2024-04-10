import Image from "next/image";
import Link from "next/link";
import RootNavLinks from "../components/RootNavLinks";
import styles from "../styles/home.module.css";
export default function Home() {
  return (
    <main>
      <div className="headeing">
        <div className="startlink">Get started by editing <a href="https://runboot-nine.vercel.app/">https://runboot-nine.vercel.app/</a></div>
        <div className="headeingLogo"><span className="headeingLogoSpan">by</span>Runboot</div>
      </div>
      <div className="h1">
        Runboot.<span>jp</span>
      </div>
      <RootNavLinks />
    </main>
  );
}
