import styles from "./Navbar.module.scss";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const downloadIcon = <FontAwesomeIcon icon={faDownload} />;

const Navbar: React.FC = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar-content-wrapper"]}>
        <div className={styles["navbar-logo"]}>ARJUN REDDY</div>
        <div className={styles["navs"]}>
          <ul className={styles["nav"]}>
            <NavItem to="/" text="Home" />
            <NavItem to="/about" text="About" />
            <NavItem to="/projects" text="Projects" />
            <NavItem to="/contact" text="Contact" />
          </ul>
        </div>
        <button type="button" className={styles["btn-download"]}>
          <span className={styles["btn-text"]}>Download CV</span>
          <span className={styles["btn-icon"]}>{downloadIcon}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
