import React from "react";
import s from "./Header.module.scss";

const Header = () => (
  <header className={s.header}>
    <h1 className={s.title}>AoW Ranking</h1>
    <h2 className={s.subtitle}>Ranking Heroes and Troops made easy!</h2>
  </header>
);

export default Header;
