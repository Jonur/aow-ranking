import { createSelector } from "reselect";

export const getGameData = ({ gameData }) => gameData;

export const getTroops = createSelector(getGameData, ({ troops }) => troops);

export const getGrades = createSelector(getGameData, ({ grades }) => grades);

export const getGradesIdHashMap = createSelector(getGrades, (grades) =>
  grades.reduce((acc, grade) => ({ ...acc, [grade.id]: grade }), {})
);

export const getClasses = createSelector(getGameData, ({ classes }) => classes);

export const getHeroes = createSelector(getGameData, ({ heroes }) => heroes);

export const getPower = createSelector(getGameData, ({ power }) => power);

export const getHeroesIdHashMap = createSelector(getHeroes, (heroes) =>
  heroes.reduce((acc, hero) => ({ ...acc, [hero.id]: hero }), {})
);

export const getTroopHashMap = createSelector(getTroops, (troops) =>
  troops.reduce((acc, troop) => ({ ...acc, [troop.name]: troop }), {})
);

export const getTroopIdHashMap = createSelector(getTroops, (troops) =>
  troops.reduce((acc, troop) => ({ ...acc, [troop.id]: troop }), {})
);

export const getTroopNames = createSelector(getTroops, (troops) =>
  troops.map(({ name }) => name).sort()
);
