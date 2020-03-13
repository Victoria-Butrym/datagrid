export const removeItems = id => ({
  type: "REMOVE_ITEMS",
  id
});

export const selectItem = id => ({
  type: "SELECT_ITEM",
  id
});

export const booleanFilter = boolean => ({
  type: "FILTER_TRUE",
  boolean
});

export const sortScore = value => ({
  type: "SORT_SCORE",
  value
});
