import React from "react";
import className from "classnames";

import Header from "../Header";
import Marquee from "../Marquee";
import s from "./App.module.scss";

const App = () => {
  const tiers = ["S", "A", "B", "C", "D", "E", "F"];

  return (
    <>
      <Header />

      <Marquee />

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
