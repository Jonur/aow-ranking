import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appActions, appSelectors } from "../../redux/app";
import Header from "../Header";
import Marquee from "../Marquee";
import Controls from "../Controls";
import Tier from "../Tier";
import Footer from "../Footer";
import s from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();

  const tiers = useSelector(appSelectors.getTiers);
  const notificationMessage = useSelector(appSelectors.getNotificationMessage);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(appActions.appInitialisation()), []);

  return (
    <>
      {notificationMessage && (
        <span className={s.notificaitonMessage}>{notificationMessage}</span>
      )}

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

      <Footer />
    </>
  );
};

export default App;
