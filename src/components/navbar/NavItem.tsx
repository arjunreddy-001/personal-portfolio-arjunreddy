import React from "react";
import styles from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";

const NavItem: React.FC<{ to: string; text: string }> = ({ to, text }) => {
  return (
    <li className={styles["nav-item"]}>
      <NavLink to={to} exact activeClassName={styles["nav-active"]}>
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
