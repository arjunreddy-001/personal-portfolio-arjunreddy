import Navbar from "../navbar/Navbar";
import styles from "./Layout.module.scss";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <div className={styles["main-content"]}>
        <div className={styles["main-content-wrapper"]}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
