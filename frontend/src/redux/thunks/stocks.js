import marketStackAPI from "../../api/marketStackAPI";
import {requestStockData, activateStock} from "../actions/stocks";

import {get} from 'lodash';

export const requestStockDataAsync = (stock) => {
  return async (dispatch, getState) => {
    try {
      const currentStore = getState();
      const hasStockAlreadyBeenRequested = get(currentStore, `stockReducer.stockData.${stock.symbol}`);
      if(hasStockAlreadyBeenRequested){
        dispatch(activateStock(stock.symbol)); //if already requested data ---> just activate the stock
        return
      }
      const stockData = await marketStackAPI.requestStockDataAPI(stock.symbol);
      dispatch(requestStockData(stockData));
      dispatch(activateStock(stock.symbol));
    } catch(e){
      console.error(`Error Requesting Stock Data:`, e)
      throw(e)
    }
  };
};