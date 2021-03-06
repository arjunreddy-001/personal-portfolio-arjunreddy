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
      <div className={styles["social-icon"]} title="LinkedIn">
        <a
          href="https://www.linkedin.com/in/arjun-reddy/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          {linkedInIcon}
        </a>
      </div>
      <div className={styles["social-icon"]} title="Github">
        <a
          href="https://github.com/arjunreddy-001"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          {githubIcon}
        </a>
      </div>
      <div className={styles["social-icon"]} title="Code Pen">
        <a
          href="https://codepen.io/arjunreddy001"
          target="_blank"
          rel="noreferrer"
          aria-label="Code Pen"
        >
          {codepenIcon}
        </a>
      </div>
      <div className={styles["social-icon"]} title="E-Mail">
        <a href="mailto: contact@arjunreddy.in" aria-label="Email">
          {emailIcon}
        </a>
      </div>
      <div className={styles["social-icon"]} title="Download CV">
        <a
          href="https://drive.google.com/file/d/1mFDGTOZtZKayXzuTDxvhiVOiguWVlmvo/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {downloadIcon}
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
