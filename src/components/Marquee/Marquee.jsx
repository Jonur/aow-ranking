import React from "react";
import { useSelector } from "react-redux";
import { gameDataSelectors } from "../../redux/gameData";
import Card from "../Card";
import s from "./Marquee.module.scss";

const Marquee = () => {
  const heroes = useSelector(gameDataSelectors.getHeroesIdHashMap);
  const grades = useSelector(gameDataSelectors.getGradesIdHashMap);

  const cardEntities = Object.values(heroes);

  return (
    <section className={s.marquee}>
      {cardEntities.map((cardEntity, index) => {
        const grade = grades[cardEntity.grade].title.toLowerCase();
        return <Card key={`card-${index}`} entity={cardEntity} grade={grade} />;
      })}
    </section>
  );
};

export default Marquee;
