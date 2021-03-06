import React, { useCallback } from "react";
import className from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { appActions, appSelectors } from "../../redux/app";
import { gameDataSelectors } from "../../redux/gameData";
import Card from "../Card";
import { ITEM_TYPES } from "../../utils/constants";
import s from "./Tier.module.scss";

const Tier = ({ tier }) => {
  const dispatch = useDispatch();

  const tiers = useSelector(appSelectors.getTiers);
  const tieredCards = useSelector(appSelectors.getTieredCards);
  const heroes = useSelector(gameDataSelectors.getHeroesIdHashMap);
  const grades = useSelector(gameDataSelectors.getGradesIdHashMap);

  const getCardsInTier = useCallback(() => [...tieredCards[tier]], [
    tieredCards,
    tier,
  ]);

  const cardsInTier = getCardsInTier();

  const dropItem = useCallback(
    (item) => {
      const isCardAlreadyInSameTier = cardsInTier.includes(item.id);
      if (!isCardAlreadyInSameTier) {
        const tierCardWasPreviouslyIn = tiers.find((tierEntry) =>
          [...tieredCards[tierEntry]].includes(item.id)
        );
        if (tierCardWasPreviouslyIn) {
          dispatch(
            appActions.removeCardFromTier({
              cardId: item.id,
              tier: tierCardWasPreviouslyIn,
            })
          );
        }
        dispatch(appActions.addCardToTier({ cardId: item.id, tier }));
      }
    },
    [cardsInTier, dispatch, tier, tieredCards, tiers]
  );

  const [{ isOver }, dropRef] = useDrop({
    accept: ITEM_TYPES.CARD,
    drop: dropItem,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className={s.tier}>
      <div
        className={className(s.label, {
          [s[tier.toLowerCase()]]: tier,
        })}
      >
        {tier}
      </div>

      <div
        className={className(s.cardHolder, {
          [s.isOver]: isOver,
        })}
        ref={dropRef}
      >
        {cardsInTier.map((cardId, index) => {
          const cardEntity = heroes[cardId];
          const grade = grades[cardEntity.grade].title.toLowerCase();
          return (
            <Card key={`card-${index}`} entity={cardEntity} grade={grade} />
          );
        })}
      </div>
    </div>
  );
};

export default Tier;
