import {get} from "lodash";

export const selectNews = (state) =>
{
  const path = `newsReducer.newsGridData`;
  const selectedNews = get(state, path);
  return selectedNews || []
};