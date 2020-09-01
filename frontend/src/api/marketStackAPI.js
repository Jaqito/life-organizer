import axios from 'axios';
// https://www.quora.com/Whats-the-best-free-API-for-programmatically-retrieving-current-stock-price-data
// todo: Use python/r to scrape live data these apis are pretty bad
export default {
  requestStockDataAPI: async (stockSymbol) => {
    try {
      //todo: run https://api.marketstack.com/v1/tickers to get info about the ticker
      let res = await axios.get(`http://api.marketstack.com/v1/eod?access_key=${process.env.REACT_APP_MARKET_STACK}&symbols=${stockSymbol}&limit=100`);
      return res.data.data || [];
    } catch (e){
      console.error(e)
    }
  }
}