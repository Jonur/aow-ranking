export const ADD_CARD_TO_TIER = "ADD_CARD_TO_TIER";

export const addCardToTier = ({ cardId, tier }) => ({
  type: ADD_CARD_TO_TIER,
  payload: { cardId, tier },
});
