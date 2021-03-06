import React from "react";
import { useSelector } from "react-redux";
import { appSelectors } from "../../redux/app";
import Header from "../Header";
import Marquee from "../Marquee";
import Controls from "../Controls";
import Tier from "../Tier";
import s from "./App.module.scss";

const App = () => {
  const tiers = useSelector(appSelectors.getTiers);

  return (
    <>
      <Header />

      <section className={s.toolbar}>
        <Controls />
        <Marquee />
      </section>

      <main className={s.tiers}>
        {tiers.map((tier, index) => (
          <Tier tier={tier} key={`tier-${index}`} />
        ))}
      </main>
    </>
  );
};

export default App;
