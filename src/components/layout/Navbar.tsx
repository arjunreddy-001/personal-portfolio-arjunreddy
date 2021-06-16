import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar-content-wrapper"]}>
        <div className={styles["navbar-logo"]}>ARJUN REDDY</div>
        <div className={styles["navs"]}>
          <ul className={styles["nav-links"]}>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
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
