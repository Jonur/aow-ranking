export const APP_INIT = "APP_INIT";
export const ADD_CARD_TO_TIER = "ADD_CARD_TO_TIER";
export const REMOVE_CARD_FROM_TIER = "REMOVE_CARD_FROM_TIER";
export const TOGGLE_CARD_TYPE = "TOGGLE_CARD_TYPE";
export const CREATE_SHAREABLE_LINK = "CREATE_SHAREABLE_LINK";
export const SET_NOTIFICATION_MESSAGE = "SET_NOTIFICATION_MESSAGE";
export const SET_TIERED_CARDS = "SET_TIERED_CARDS";
export const CLOSE_TOGGLE_CARDS_MODAL = "CLOSE_TOGGLE_CARDS_MODAL";
export const OPEN_TOGGLE_CARDS_MODAL = "OPEN_TOGGLE_CARDS_MODAL";

export const appInitialisation = () => ({
  type: APP_INIT,
});

export const addCardToTier = ({ cardId, tier }) => ({
  type: ADD_CARD_TO_TIER,
  payload: { cardId, tier },
});

export const removeCardFromTier = ({ cardId, tier }) => ({
  type: REMOVE_CARD_FROM_TIER,
  payload: { cardId, tier },
});

export const toggleCardType = ({ type }) => ({
  type: TOGGLE_CARD_TYPE,
  payload: { type },
});

export const createShareableLink = () => ({
  type: CREATE_SHAREABLE_LINK,
});

export const setNotificationMessage = ({ message }) => ({
  type: SET_NOTIFICATION_MESSAGE,
  payload: { message },
});

export const setTieredCards = ({ tieredCards }) => ({
  type: SET_TIERED_CARDS,
  payload: { tieredCards },
});

export const closeToggleCardsModal = () => ({
  type: CLOSE_TOGGLE_CARDS_MODAL,
});

export const openToggleCardsModal = () => ({
  type: OPEN_TOGGLE_CARDS_MODAL,
});
