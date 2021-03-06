import update from "immutability-helper";
import initialState from "./initialState";
import { appActions } from "./";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.SET_TIERED_CARDS: {
      return update(state, {
        tieredCards: { $set: action.payload.tieredCards },
      });
    }
    case appActions.ADD_CARD_TO_TIER: {
      return update(state, {
        tieredCards: {
          [action.payload.tier]: { $add: [action.payload.cardId] },
        },
      });
    }
    case appActions.REMOVE_CARD_FROM_TIER: {
      return update(state, {
        tieredCards: {
          [action.payload.tier]: { $remove: [action.payload.cardId] },
        },
      });
    }
    case appActions.TOGGLE_CARD_TYPE: {
      return update(state, {
        tieredCards: { $set: initialState.tieredCards },
        userInteractions: {
          cardType: { $set: action.payload.type },
        },
      });
    }
    case appActions.SET_NOTIFICATION_MESSAGE: {
      return update(state, {
        userInteractions: {
          notificationMessage: { $set: action.payload.message },
        },
      });
    }
    case appActions.CLOSE_TOGGLE_CARDS_MODAL: {
      return update(state, {
        modals: {
          toggleCardsModal: { $set: false },
        },
      });
    }
    case appActions.OPEN_TOGGLE_CARDS_MODAL: {
      return update(state, {
        modals: {
          toggleCardsModal: { $set: true },
        },
      });
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
