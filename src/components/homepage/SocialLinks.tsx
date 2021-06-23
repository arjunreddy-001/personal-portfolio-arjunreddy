import styles from "./SocialLinks.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const codepenIcon = <FontAwesomeIcon icon={faCodepen} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const downloadIcon = <FontAwesomeIcon icon={faFileDownload} />;

const SocialLinks: React.FC = () => {
  return (
    <div className={styles["social"]}>
      <div className={styles["social-icon"]}>
        <a
          href="https://www.linkedin.com/in/arjun-reddy/"
          target="_blank"
          rel="noreferrer"
        >
          {linkedInIcon}
        </a>
      </div>
      <div className={styles["social-icon"]}>
        <a
          href="https://github.com/arjunreddy-001"
          target="_blank"
          rel="noreferrer"
        >
          {githubIcon}
        </a>
      </div>
      <div className={styles["social-icon"]}>
        <a
          href="https://codepen.io/arjunreddy001"
          target="_blank"
          rel="noreferrer"
        >
          {codepenIcon}
        </a>
      </div>
      <div className={styles["social-icon"]}>
        <a href="mailto: contact@arjunreddy.in">{emailIcon}</a>
      </div>
      <div className={styles["social-icon"]}>
        <a href="/download">{downloadIcon}</a>
      </div>
    </div>
  );
};

export default SocialLinks;
