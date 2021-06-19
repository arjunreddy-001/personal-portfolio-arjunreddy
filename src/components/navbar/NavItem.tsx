import React from "react";
import styles from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";

const NavItem: React.FC<{
  to: string;
  text: string;
  icon: React.ReactElement;
  onNavLinkClick: () => void;
}> = ({ to, text, icon, onNavLinkClick }) => {
  return (
    <li className={styles["nav-item"]}>
      <NavLink
        to={to}
        exact
        className={styles["nav-link"]}
        activeClassName={styles["nav-active"]}
        onClick={onNavLinkClick}
      >
        <span className={styles["nav-icon"]}>{icon}</span>
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
