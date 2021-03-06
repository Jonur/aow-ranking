import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import Modal from "react-modal";

import { appActions, appSelectors } from "../../redux/app";
import { CARD_TYPES } from "../../utils/constants";
import s from "./ToggleCardsModal.module.scss";

const ToggleCardsModal = () => {
  const dispatch = useDispatch();

  const selectedCardType = useSelector(appSelectors.getSelectedCardType);

  const handleCloseModal = useCallback(
    () => dispatch(appActions.closeToggleCardsModal()),
    [dispatch]
  );

  const handleToggleCardType = useCallback(() => {
    const type =
      selectedCardType === CARD_TYPES.TROOP
        ? CARD_TYPES.HERO
        : CARD_TYPES.TROOP;
    dispatch(appActions.toggleCardType({ type }));
    dispatch(appActions.closeToggleCardsModal());
  }, [dispatch, selectedCardType]);

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleCloseModal}
      overlayClassName={s.overlay}
      className={s.modal}
      contentLabel="Toggle board modal"
      appElement={document.getElementById("root")}
    >
      <h2 className={s.title}>
        <i class={classNames("fas", " fa-info-circle", s.titleIcon)}></i>
        Toggle ranking cards
      </h2>
      <p>Toggling between ranking Heroes and Troops will empty the tiers.</p>
      <p>Consider sharing the URL of your current selection first.</p>

      <div className={s.controls}>
        <button
          className={classNames(s.btn, s.cancel)}
          onClick={handleCloseModal}
        >
          Cancel
        </button>
        <button
          className={classNames(s.btn, s.submit)}
          onClick={handleToggleCardType}
        >
          Proceed
        </button>
      </div>
    </Modal>
  );
};

export default ToggleCardsModal;
