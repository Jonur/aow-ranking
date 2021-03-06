import getUrlParamHashes from "./getUrlParamHashes";
import { TIERS } from "./constants";

const getTieredCardsFromURL = ({ entitySourceForValidation }) => {
  const urlParamHashes = getUrlParamHashes();

  return TIERS.reduce((acc, tier) => {
    const cardIDsInTierFromURL =
      urlParamHashes
        .find((hash) => hash?.split("=")?.[0] === tier)
        ?.split("=")?.[1] || "";

    const cardIds = !!cardIDsInTierFromURL
      ? cardIDsInTierFromURL.split(",")
      : [];

    const sanitisedCardIds = cardIds.filter(
      (cardId) => !!entitySourceForValidation[cardId]
    );

    return {
      ...acc,
      [tier]: new Set(sanitisedCardIds),
    };
  }, {});
};

export default getTieredCardsFromURL;
