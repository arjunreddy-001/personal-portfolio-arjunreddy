import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar-content-wrapper"]}>
        <div className={styles["navbar-logo"]}>ARJUN REDDY</div>
        <div className={styles["navs"]}>
          <ul className={styles["nav-links"]}>
            <li>
              <NavLink to="/" exact activeClassName={styles["nav-active"]}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeClassName={styles["nav-active"]}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                exact
                activeClassName={styles["nav-active"]}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                exact
                activeClassName={styles["nav-active"]}
              >
                Contact
              </NavLink>
            </li>
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
