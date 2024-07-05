import Image from "next/image";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.h1}>আrthiক</h1>

          <p className={styles.p}>
            I am a Youtuber and the channel name is Arthik . Here on this
            website, I wrote about financial things like investment, mutual
            fund, index fund, etc. And this website is in Bengali language
          </p>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.profile_png}
            src="/profile.png"
            height={550}
            width={550}
          />
          <img
            className={styles.profile_png2}
            src="/profile.png"
            height={200}
            width={200}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
