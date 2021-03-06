import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import className from "classnames";
import { appActions, appSelectors } from "../../redux/app";
import { CARD_TYPES } from "../../utils/constants";
import s from "./Controls.module.scss";

const Controls = () => {
  const dispatch = useDispatch();

  const selectedCardType = useSelector(appSelectors.getSelectedCardType);
  const usedCards = useSelector(appSelectors.getUsedCards);

  const handleToggleCardType = useCallback(() => {
    const type =
      selectedCardType === CARD_TYPES.TROOP
        ? CARD_TYPES.HERO
        : CARD_TYPES.TROOP;
    dispatch(appActions.toggleCardType({ type }));
  }, [dispatch, selectedCardType]);

  return (
    <div className={s.controls}>
      <button
        aria-label={`Viewing ${selectedCardType} cards`}
        className={className(s.btn, s.toggleCardType)}
        onClick={handleToggleCardType}
      >
        <i
          className={className("fas", {
            "fa-users": selectedCardType === CARD_TYPES.TROOP,
            "fa-user": selectedCardType === CARD_TYPES.HERO,
          })}
        ></i>
      </button>

      <button
        aria-label="Share selection with URL"
        className={className(s.btn, s.shareBtn)}
        disabled={!usedCards.length}
        onClick={() => dispatch(appActions.createShareableLink())}
      >
        <i className="fas fa-share-square"></i>
      </button>
    </div>
  );
};

export default Controls;
