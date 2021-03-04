import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { gameDataSelectors } from "../../redux/gameData";
import s from "./Marquee.module.scss";

const Marquee = () => {
  const heroes = useSelector(gameDataSelectors.getHeroesIdHashMap);
  const grades = useSelector(gameDataSelectors.getGradesIdHashMap);

  return (
    <section className={s.marquee}>
      {Object.values(heroes).map((hero, index) => {
        const grade = grades[hero.grade].title.toLowerCase();

        return (
          <div
            className={classNames(s.card, {
              [s[grade]]: hero.grade,
            })}
            key={`card-${index}`}
          >
            <img className={s.image} src={hero.image} alt={hero.name} />
          </div>
        );
      })}
    </section>
  );
};

export default Marquee;
