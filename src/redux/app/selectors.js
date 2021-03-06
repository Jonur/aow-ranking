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

export const getCardEntities = createSelector(
  getSelectedCardType,
  gameDataSelectors.getHeroesIdHashMap,
  gameDataSelectors.getTroopIdHashMap,
  (cardType, heroes, troops) =>
    cardType === CARD_TYPES.HERO ? Object.values(heroes) : Object.values(troops)
);

export const getUsedCards = createSelector(
  getTiers,
  getTieredCards,
  (tiers, tieredCards) =>
    tiers.reduce((acc, tier) => [...acc, ...tieredCards[tier]], [])
);

export const getAvailableCards = createSelector(
  getCardEntities,
  getUsedCards,
  (cardEntities, usedCards) =>
    cardEntities.filter((cardEntity) => !usedCards.includes(cardEntity.id))
);

export const getCardsLinkParams = createSelector(
  getTiers,
  getTieredCards,
  (tiers, tieredCards) =>
    tiers.reduce((acc, tier) => {
      const cardInTier = [...tieredCards[tier]];
      return cardInTier.length
        ? `${acc}&${tier}=${cardInTier.toString()}`
        : acc;
    }, "")
);

export const getNotificationMessage = createSelector(
  getUserInteractions,
  ({ notificationMessage }) => notificationMessage
);

export const getToggleCardsModalStatus = createSelector(
  getApp,
  ({ modals }) => modals.toggleCardsModal
);
