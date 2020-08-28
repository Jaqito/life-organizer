import marketStackAPI from "../../api/marketStackAPI";
import {requestStockData, activateStock} from "../actions/stocks";

import {get} from 'lodash';
import newsAPI from "../../api/newsAPI";

export const requestStockDataAsync = (stock) => {
  return async (dispatch, getState) => {
    try {
      const currentStore = getState();
      const hasStockAlreadyBeenRequested = get(currentStore, `stockReducer.stockData.${stock.symbol}`);
      if(hasStockAlreadyBeenRequested){
        dispatch(activateStock(stock.symbol)); //if already requested data ---> just activate the stock
        return
      }
      //todo: split up news/market data? idk this kind of works.
      const stockData = await Promise.all([
        marketStackAPI.requestStockDataAPI(stock.symbol),
        newsAPI.requestNewsWithQueryAPI('$' + stock.symbol + ' ' + stock.name ), //$FB Facebook
      ]).then(([pricing, news]) => ({
        pricing, news //spread into obj {pricing: [], news: []}
      }));
      dispatch(requestStockData(stockData));
      dispatch(activateStock(stock.symbol));
    } catch(e){
      console.error(`Error Requesting Stock Data:`, e);
      throw(e)
    }
  };
};