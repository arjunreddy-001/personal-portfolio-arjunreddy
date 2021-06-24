import { Link } from "react-router-dom";
import styles from "./AboutPage.module.scss";
import aboutImage from "../assets/images/about.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const rightArrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

const AboutPage: React.FC = () => {
  return (
    <section className={styles["about-section"]}>
      <h2 className={styles["title"]}>About Me</h2>
      <span className={styles["subtitle"]}>My Introduction</span>

      <div className={styles["about-container"]}>
        <img src={aboutImage} alt="" className={styles["about-img"]} />
        <div className={styles["about-data"]}>
          <p className={styles["about-description"]}>
            I'm a self-taught web developer currently located in Bengaluru,
            India. I am working at Starmark Software and have been in the IT
            industry for over 3 years as a Software Engineer. My main focus is
            on front-end development. I can create responsive websites using
            React JS and can automate E2E UI tests using Selenium & Java.
          </p>

          <Link to="/projects" className={styles["link-to-projects"]}>
            <span className={styles["link-to-projects-text"]}>
              view my projects
            </span>
            <span className={styles["link-to-projects-icon"]}>
              {rightArrowIcon}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
