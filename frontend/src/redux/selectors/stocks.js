import { get } from 'lodash';
import {calculatePercentageChange} from "../../helpers";
import {appleData} from "../../helpers/testData";

export const selectStockPricing = (state) =>
{
  const path = `stockReducer.stockData.${state.stockReducer.activeStock}.pricing`;
  const selectedStock = get(state, path);
  return selectedStock || []
};

export const selectStockNews = (state) =>
{
  const path = `stockReducer.stockData.${state.stockReducer.activeStock}.news`;
  const selectedStock = get(state, path);
  return selectedStock || []
};

export const selectStockChanges = (state) =>
{

  const path = `stockReducer.stockData`;
  const stocks = get(state, path);
  const stockChangeArray = Object.keys(stocks).map(symbol => {
    const path = `stockReducer.stockData.${symbol}.pricing`;
    const selectedStock = get(state, path);
    const dailyChange = calculatePercentageChange(selectedStock[0].open, selectedStock[0].close);
    const closePrice = selectedStock[0].close;
    return {symbol, dailyChange, closePrice }
  });
  return stockChangeArray.reduce((obj, item) => Object.assign(obj, {
    [item.symbol]: {dailyChange: item.dailyChange, closePrice: item.closePrice}
    }), {});
  //{ "UBER": {closePrice: 50, dailyChange: 2% }}
};

export const selectActiveStock = (state) => {
  return state.stockReducer.activeStock
};

