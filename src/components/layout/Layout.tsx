import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import SocialLinks from "../../components/homepage/SocialLinks";
import Footer from "../footer/Footer";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <div className={styles["social-links"]}>
          <SocialLinks />
      </div>
      <div className={styles["main-content"]}>
        <div className={styles["main-content-wrapper"]}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
