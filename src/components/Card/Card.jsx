import React, { useCallback } from "react";
import { number, shape, string } from "prop-types";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import classNames from "classnames";

import { appActions } from "../../redux/app";
import { ITEM_TYPES } from "../../utils/constants";
import s from "./Card.module.scss";

const Card = ({ entity, grade, order, tier }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: ITEM_TYPES.CARD,
    item: {
      id: entity.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleRemoveCardFromTier = useCallback(
    () =>
      dispatch(
        appActions.removeCardFromTier({
          cardId: entity.id,
          tier,
        })
      ),
    [dispatch, entity.id, tier]
  );

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
          onClick={handleRemoveCardFromTier}
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
