import {
  REQUEST_STOCK_DATA,
  ACTIVATE_STOCK,
} from "../actions/stocks";

const initialState = {
  stockData: {},
  activeStock: null, //current selected stock
};

const stockReducer =  (state = initialState, action, ) => {
  switch (action.type) {
    case REQUEST_STOCK_DATA: {
      const stockSymbol = action.requestStockData[0]['symbol'];
      return {
        ...state,
        stockData: {...state.stockData, [stockSymbol]: action.requestStockData}
      }
    }
    case ACTIVATE_STOCK: {
      return {
        ...state,
        activeStock: action.activateStock
      }
    }
    default:
      return state
  }
};

export default stockReducer;