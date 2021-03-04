import React, { useRef } from "react";
import classNames from "classnames";

import s from "./Card.module.scss";

const Card = ({ entity, grade }) => {
  const cardRef = useRef();

  return (
    <div
      className={classNames(s.card, {
        [s[grade]]: entity.grade,
      })}
      ref={cardRef}
    >
      <img
        className={s.image}
        src={entity.image}
        alt={entity.name}
        title={entity.name}
      />
    </div>
  );
};

export default Card;
