import React from "react";
import className from "classnames";
import s from "./App.module.scss";

const App = () => {
  const tiers = ["S", "A", "B", "C", "D", "E", "F"];

  return (
    <>
      <header className={s.header}>
        <h1 className={s.title}>AoW Ranking</h1>
        <h2 className={s.subtitle}>Ranking Heroes and Troops made easy!</h2>
      </header>
      <main className={s.tiers}>
        {tiers.map((tier, index) => (
          <div className={s.tier} key={`tier-${index}`}>
            <div
              className={className(s.label, { [s[tier.toLowerCase()]]: tier })}
            >
              {tier}
            </div>
            <div className={s.row}></div>
          </div>
        ))}
      </main>
    </>
  );
};

export default App;
