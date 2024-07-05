import { SocialIcon } from "react-social-icons";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p>Contact</p>
          <p>Privacy</p>
          <p>Developers</p>
        </div>
        <div className={styles.social}>
          <SocialIcon
            className={styles.icon}
            url="https://twitter.com/arthik_official"
            bgColor="#030e12"
            target="_blank"
          />
          <SocialIcon
            className={styles.icon}
            url="https://www.instagram.com/_arthik_official/"
            bgColor="#030e12"
            target="_blank"
          />
          <SocialIcon
            className={styles.icon}
            url="https://www.youtube.com/channel/UCl0ZQt6RnoGSspGNv6Dqntw"
            bgColor="#030e12"
            target="_blank"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
