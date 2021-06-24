import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const copyrightIcon = <FontAwesomeIcon icon={faCopyright} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;

const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content-wrapper"]}>
        <div className={styles["footer-copyright"]}>
          {copyrightIcon} 2021 Arjun Reddy. All rights reserved.
        </div>
        <div className={styles["footer-link"]}>
          <a href="mailto: contact@arjunreddy.in" aria-label="email">
            {emailIcon}
            <span className={`${styles["text"]} ${styles["email"]}`}>
              contact@arjunreddy.in
            </span>
          </a>
        </div>
        <div className={styles["footer-link"]}>
          <a
            href="https://linkedin.com/in/arjun-reddy"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            {linkedInIcon}
            <span className={`${styles["text"]} ${styles["linkedin"]}`}>
              Connect with me
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
