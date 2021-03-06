export const ADD_CARD_TO_TIER = "ADD_CARD_TO_TIER";
export const REMOVE_CARD_FROM_TIER = "REMOVE_CARD_FROM_TIER";

export const addCardToTier = ({ cardId, tier }) => ({
  type: ADD_CARD_TO_TIER,
  payload: { cardId, tier },
});

export const removeCardFromTier = ({ cardId, tier }) => ({
  type: REMOVE_CARD_FROM_TIER,
  payload: { cardId, tier },
});
