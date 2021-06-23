import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import homeImg from "../assets/images/perfil.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const rightArrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

const HomePage: React.FC = () => {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-content"]}>
        <div className={styles["data"]}>
          <h1 className={styles["title"]}><span className={styles["hi"]}>Hi,</span> I'm Arjun Reddy</h1>
          <h3 className={styles["subtitle"]}>Frontend developer</h3>
          <Link to="/about" className={styles["link-to-about"]}>
            <span className={styles["link-to-about-text"]}>more about me</span>
            <span className={styles["link-to-about-icon"]}>{rightArrowIcon}</span>
          </Link>
        </div>
        
        <div className={styles["image"]}>
          <svg
            className={styles["blob"]}
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                className={styles["blob-img"]}
                x="18"
                y="18"
                xlinkHref={homeImg}
              />
            </g>
          </svg>
        </div>

        
      </div>
    </div>
  );
};

export default HomePage;
