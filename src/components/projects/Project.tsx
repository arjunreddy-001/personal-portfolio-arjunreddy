import React, { useState } from "react";
import styles from "./Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes, faCode } from "@fortawesome/free-solid-svg-icons";
const eyeIcon = <FontAwesomeIcon icon={faEye} />;
const closeIcon = <FontAwesomeIcon icon={faTimes} />;
const codeIcon = <FontAwesomeIcon icon={faCode} />;

const Project: React.FC<{
  name: string;
  summary: string;
  img: string | undefined;
  demo: string;
  code: string;
  technologies: { name: string }[];
}> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showProject = () => {
    setShowModal(true);
  };

  const hideProject = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles["project"]}>
        {/* Project Card */}
        <div className={styles["project__item"]}>
          <img
            className={styles["project__img"]}
            src={props.img}
            alt="Project"
          />
          <div className={styles["project__overlay"]}>
            <div className={styles["project__buttons"]}>
              <button
                className={styles["project__button"]}
                onClick={showProject}
              >
                {eyeIcon}
                View Project
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${styles["project__background"]} ${
            showModal ? styles["project__background--show"] : ""
          }`}
        >
          <div
            className={`${styles["project__modal"]} ${
              showModal ? styles["project__modal--show"] : ""
            }`}
          >
            <button className={styles["project__close"]} onClick={hideProject}>
              {closeIcon}
            </button>

            <div className={styles["project__left"]}>
              <img
                className={styles["project__img--modal"]}
                src={props.img}
                alt="Project"
              />
            </div>

            <div className={styles["project__right"]}>
              <div className={styles["project__label"]}>Project</div>
              <h3 className={styles["project__name"]}>{props.name}</h3>
              <ul className={styles["project__technologies"]}>
                {props.technologies.map((tech, index) => (
                  <li className={styles["project__technology"]} key={index}>
                    {tech.name}
                  </li>
                ))}
              </ul>
              <div className={styles["project__label"]}>About</div>
              <p className={styles["project__summary"]}>{props.summary}</p>
              <div className={styles["project__modalButtons"]}>
                <a
                  href={props.demo}
                  className={`${styles["project__button"]} ${styles["project__button--modal"]}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {eyeIcon}
                  Demo
                </a>
                {props.code === "private" && (
                  <button
                    className={`${styles["project__button"]} ${styles["project__button--modal"]}`}
                    disabled
                  >
                    {codeIcon}
                    Private
                  </button>
                )}
                {props.code !== "private" && (
                  <a
                    href={props.code}
                    className={`${styles["project__button"]} ${styles["project__button--modal"]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {codeIcon}
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
