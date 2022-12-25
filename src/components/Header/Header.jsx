import React from "react";
import toDoLogo from "../../assets/to-do-logo.svg";
import styles from "../Header/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logo da ToDo" />
    </header>
  );
}
