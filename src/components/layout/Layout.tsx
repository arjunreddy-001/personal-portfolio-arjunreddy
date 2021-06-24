import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import SocialLinks from "./SocialLinks";
import Footer from "../footer/Footer";

const Layout: React.FC = (props) => {
  return (
    <div>
      <div className={styles["social-links"]}>
        <SocialLinks />
      </div>
      <div className="layout">
        <Navbar />
        <main className={styles["main-content"]}>
          <div className={styles["main-content-wrapper"]}>{props.children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
