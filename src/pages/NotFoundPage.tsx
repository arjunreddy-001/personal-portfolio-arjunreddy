import styles from "./NotFoundPage.module.scss";
import pageNotFoundImage from "../assets/images/page_not_found.svg";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles["page-not-found"]}>
      <img
        src={pageNotFoundImage}
        alt="Page Not Found"
        className={styles["page-not-found-img"]}
      />
      <h1 className={styles["page-not-found-text"]}>Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
