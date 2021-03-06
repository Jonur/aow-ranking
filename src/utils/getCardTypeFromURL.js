import getUrlParamHashes from "./getUrlParamHashes";
import { CARD_TYPES } from "./constants";

const getCardTypeFromURL = () => {
  const urlParamHashes = getUrlParamHashes();
  const cardTypeInUrl = urlParamHashes
    .find((hash) => hash?.split("=")?.[0] === "type")
    ?.split("=")?.[1];

  const isValidCardType =
    cardTypeInUrl && Object.values(CARD_TYPES).includes(cardTypeInUrl);

  return isValidCardType ? cardTypeInUrl : "";
};

export default getCardTypeFromURL;
