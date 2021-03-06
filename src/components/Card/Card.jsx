import React from "react";
import classNames from "classnames";
import { useDrag } from "react-dnd";
import { ITEM_TYPES } from "../../utils/constants";
import s from "./Card.module.scss";

const Card = ({ entity, grade }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: ITEM_TYPES.CARD,
      id: entity.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className={classNames(s.card, {
        [s[grade]]: entity.grade,
        [s.isDragging]: isDragging,
      })}
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
