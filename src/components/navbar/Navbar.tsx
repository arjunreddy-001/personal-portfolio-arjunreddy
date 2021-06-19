import { useState } from "react";
import styles from "./Navbar.module.scss";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faHome,
  faUser,
  faTimes,
  faBars,
  faCommentDots,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const downloadIcon = <FontAwesomeIcon icon={faDownload} />;
const homeIcon = <FontAwesomeIcon icon={faHome} />;
const aboutIcon = <FontAwesomeIcon icon={faUser} />;
const portfolioIcon = <FontAwesomeIcon icon={faImage} />;
const contactIcon = <FontAwesomeIcon icon={faCommentDots} />;
const closeIcon = (
  <FontAwesomeIcon icon={faTimes} className={styles["nav-close"]} />
);
const toggleNavIcon = <FontAwesomeIcon icon={faBars} />;

const Navbar: React.FC = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const showNav = () => {
    setIsNavShown(true);
  };
  const closeNav = () => {
    setIsNavShown(false);
  };

  const navsClasses = `${styles["navs"]} ${
    isNavShown ? styles["show-nav"] : ""
  }`;

  return (
    <header className={styles["navbar"]}>
      <nav className={styles["navbar-content-wrapper"]}>
        <div className={styles["navbar-logo"]}>ARJUN REDDY</div>
        <div className={navsClasses}>
          <ul className={styles["nav"]}>
            <NavItem
              to="/"
              text="Home"
              icon={homeIcon}
              onNavLinkClick={closeNav}
            />
            <NavItem
              to="/about"
              text="About"
              icon={aboutIcon}
              onNavLinkClick={closeNav}
            />
            <NavItem
              to="/projects"
              text="Projects"
              icon={portfolioIcon}
              onNavLinkClick={closeNav}
            />
            <NavItem
              to="/contact"
              text="Contact"
              icon={contactIcon}
              onNavLinkClick={closeNav}
            />
            <div className={styles["nav-close"]} onClick={closeNav}>
              {closeIcon}
            </div>
          </ul>
          <div className={styles["btn-container"]}>
            <button type="button" className={styles["btn-download"]}>
              <span className={styles["btn-text"]}>Download CV</span>
              <span className={styles["btn-icon"]}>{downloadIcon}</span>
            </button>
          </div>
        </div>

        <div className={styles["hamburger"]}>
          <div className={styles["nav-toggle"]} onClick={showNav}>
            {toggleNavIcon}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
