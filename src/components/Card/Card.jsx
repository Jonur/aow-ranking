import React from "react";
import { number, shape, string } from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

import { appActions } from "../../redux/app";
import { ITEM_TYPES } from "../../utils/constants";
import s from "./Card.module.scss";

const Card = ({ entity, grade, order, tier }) => {
  const dispatch = useDispatch();

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
      style={{ order }}
    >
      <img
        className={s.image}
        src={entity.image}
        alt={entity.name}
        title={entity.name}
      />
      {tier && (
        <button
          title="Remove"
          className={s.remove}
          onClick={() =>
            dispatch(
              appActions.removeCardFromTier({
                cardId: entity.id,
                tier,
              })
            )
          }
          type="button"
        >
          &times;
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  entity: shape().isRequired,
  grade: string.isRequired,
  order: number.isRequired,
  tier: string,
};

export default Card;
