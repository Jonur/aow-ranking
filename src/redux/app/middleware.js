import { appActions, appSelectors } from "./";
import { gameDataSelectors } from "../gameData";
import getCardTypeFromURL from "../../utils/getCardTypeFromURL";
import getTieredCardsFromURL from "../../utils/getTieredCardsFromURL";
import { CARD_TYPES } from "../../utils/constants";

const appMiddleware = (store) => (next) => (action) => {
  if (action.type === appActions.APP_INIT) {
    const state = store.getState();

    const cardTypeFromURL = getCardTypeFromURL();
    if (cardTypeFromURL) {
      store.dispatch(appActions.toggleCardType({ type: cardTypeFromURL }));
    }

    const selectedCardType = appSelectors.getSelectedCardType(state);
    const troops = gameDataSelectors.getTroopIdHashMap(state);
    const heroes = gameDataSelectors.getHeroesIdHashMap(state);

    const validateAgainstType = cardTypeFromURL || selectedCardType;
    const entitySourceForValidation =
      validateAgainstType === CARD_TYPES.HERO ? heroes : troops;

    const tieredCardsFromURL = getTieredCardsFromURL({
      entitySourceForValidation,
    });
    store.dispatch(
      appActions.setTieredCards({ tieredCards: tieredCardsFromURL })
    );
  }

  if (action.type === appActions.CREATE_SHAREABLE_LINK) {
    const state = store.getState();

    const selectedCardType = appSelectors.getSelectedCardType(state);
    const cardsLinkParams = appSelectors.getCardsLinkParams(state);

    const formationLink = `${window.location.origin}${window.location.pathname}?type=${selectedCardType}${cardsLinkParams}`;

    const newTextarea = document.createElement("textarea");
    newTextarea.id = "formation-link";
    newTextarea.value = formationLink;
    document.body.appendChild(newTextarea);
    newTextarea.select();
    document.execCommand("copy");
    newTextarea.remove();

    store.dispatch(
      appActions.setNotificationMessage({
        message:
          "The shareable link has been copied to your clipboard. You can paste it anywhere to share it!",
      })
    );
    setTimeout(
      () => store.dispatch(appActions.setNotificationMessage({ message: "" })),
      4000
    );
  }

  next(action);
};

export default appMiddleware;
