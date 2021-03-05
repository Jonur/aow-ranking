import { createSelector } from "reselect";

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
