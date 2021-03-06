export const ADD_CARD_TO_TIER = "ADD_CARD_TO_TIER";
export const REMOVE_CARD_FROM_TIER = "REMOVE_CARD_FROM_TIER";
export const TOGGLE_CARD_TYPE = "TOGGLE_CARD_TYPE";

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
