import React from "react";
import { useSelector } from "react-redux";

import { appSelectors } from "../../redux/app";
import { gameDataSelectors } from "../../redux/gameData";
import Card from "../Card";
import s from "./Marquee.module.scss";

const Marquee = () => {
  const grades = useSelector(gameDataSelectors.getGradesIdHashMap);
  const availableCards = useSelector(appSelectors.getAvailableCards);

  return (
    <section className={s.marquee}>
      {availableCards.map((cardEntity, index) => {
        const grade = grades[cardEntity.grade].title.toLowerCase();
        const order = grades[cardEntity.grade].order;

        return (
          <Card
            key={`card-${index}`}
            entity={cardEntity}
            grade={grade}
            order={order}
          />
        );
      })}
    </section>
  );
};

export default Marquee;
