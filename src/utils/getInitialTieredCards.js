const getInitialTieredCards = (tiers) =>
  tiers.reduce((acc, tier) => ({ ...acc, [tier]: new Set() }), {});

export default getInitialTieredCards;
