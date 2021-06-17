import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

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

          <button type="button" className={styles["btn-download"]}>
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
