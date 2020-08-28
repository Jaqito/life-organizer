import { createSelector } from 'reselect'
import { get } from 'lodash';

export const selectStock = (state) =>
{
  console.log(Object.getOwnPropertyNames(state.stockReducer));
  const path = `stockReducer.stockData.${state.stockReducer.activeStock}`;
  const selectedStock = get(state, path);
  console.log(selectedStock);
  return selectedStock || []//.find(stock => stock.symbol === 'UBER')//state.stockReducer.activeStock
};
