import update from "immutability-helper";
import initialState from "./initialState";
import { appActions } from "./";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.ADD_CARD_TO_TIER: {
      return update(state, {
        tieredCards: {
          [action.payload.tier]: { $add: [action.payload.cardId] },
        },
      });
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
