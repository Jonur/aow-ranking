import { CARD_TYPES, TIERS } from "../../utils/constants";
import getInitialTieredCards from "../../utils/getInitialTieredCards";

const initialState = {
  tiers: TIERS,
  tieredCards: getInitialTieredCards(TIERS),
  userInteractions: {
    cardType: CARD_TYPES.HERO,
    notificationMessage: "",
  },
};

export default initialState;
