import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNave.module.css";

export default function () {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/functionality">Functionality</NavLink>
        </li>
        <li>
          <NavLink to="/auction">Auction</NavLink>
        </li>
      </ul>
    </nav>
  );
}
