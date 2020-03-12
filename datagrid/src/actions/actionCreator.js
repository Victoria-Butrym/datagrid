export const removeItem = id => ({
  type: "REMOVE_ITEM",
  id
});

export const booleanFilter = boolean => ({
  type: "FILTER_TRUE",
  boolean
});
