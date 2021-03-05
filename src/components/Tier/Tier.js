import React from "react";
import className from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { appActions, appSelectors } from "../../redux/app";
import { ITEM_TYPES } from "../../utils/constants";
import s from "./Tier.module.scss";

const Tier = ({ tier }) => {
  const dispatch = useDispatch();
  const tieredCards = useSelector(appSelectors.getTieredCards);

  const [{ isOver }, dropRef] = useDrop({
    accept: ITEM_TYPES.CARD,
    drop: (item) =>
      dispatch(appActions.addCardToTier({ cardId: item.id, tier })),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  console.log(`Tier ${tier}:`, tieredCards[tier]);

  return (
    <div className={s.tier}>
      <div
        className={className(s.label, {
          [s[tier.toLowerCase()]]: tier,
        })}
      >
        {tier}
      </div>

      <div
        className={className(s.cardHolder, {
          [s.isOver]: isOver,
        })}
        ref={dropRef}
      ></div>
    </div>
  );
};

export default Tier;
