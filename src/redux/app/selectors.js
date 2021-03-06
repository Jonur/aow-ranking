import { createSelector } from "reselect";
import { gameDataSelectors } from "../gameData";
import { CARD_TYPES } from "../../utils/constants";

export const getApp = ({ app }) => app;

export const getTiers = createSelector(getApp, ({ tiers }) => tiers);

export const getTieredCards = createSelector(
  getApp,
  ({ tieredCards }) => tieredCards
);

export const getUserInteractions = createSelector(
  getApp,
  ({ userInteractions }) => userInteractions
);

export const getSelectedCardType = createSelector(
  getUserInteractions,
  ({ cardType }) => cardType
);

export const getAvailableCards = createSelector(
  getSelectedCardType,
  gameDataSelectors.getHeroesIdHashMap,
  gameDataSelectors.getTroopIdHashMap,
  getTiers,
  getTieredCards,
  (cardType, heroes, troops, tiers, tieredCards) => {
    const cardEntities =
      cardType === CARD_TYPES.HERO
        ? Object.values(heroes)
        : Object.values(troops);
    const usedCards = tiers.reduce(
      (acc, tier) => [...acc, ...tieredCards[tier]],
      []
    );
    const availableCards = cardEntities.filter(
      (cardEntity) => !usedCards.includes(cardEntity.id)
    );
    return availableCards;
  }
);
