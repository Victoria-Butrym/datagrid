export const removeItems = id => ({
  type: "REMOVE_ITEMS",
  id
});

export const selectItem = id => ({
  type: "SELECT_ITEM",
  id
});

export const booleanFilter = boolean => ({
  type: "BOOLEAN_FILTER",
  boolean
});

export const sortScore = value => ({
  type: "SORT_SCORE",
  value
});

export const nameSearch = value => ({
  type: "NAME_SEARCH",
  value
});
