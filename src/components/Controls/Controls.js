import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { appActions, appSelectors } from "../../redux/app";
import { CARD_TYPES } from "../../utils/constants";
import s from "./Controls.module.scss";

const Controls = () => {
  const dispatch = useDispatch();

  const selectedCardType = useSelector(appSelectors.getSelectedCardType);
  const usedCards = useSelector(appSelectors.getUsedCards);

  return (
    <div className={s.controls}>
      <button
        aria-label={`Viewing ${selectedCardType} cards`}
        className={classNames(s.btn, s.toggleCardType)}
        onClick={() => dispatch(appActions.openToggleCardsModal())}
      >
        <i
          className={classNames("fas", {
            "fa-users": selectedCardType === CARD_TYPES.TROOP,
            "fa-user": selectedCardType === CARD_TYPES.HERO,
          })}
        ></i>
      </button>

      <button
        aria-label="Share selection with URL"
        className={classNames(s.btn, s.shareBtn)}
        disabled={!usedCards.length}
        onClick={() => dispatch(appActions.createShareableLink())}
      >
        <i className="fas fa-share-square"></i>
      </button>
    </div>
  );
};

export default Controls;
