import axios from 'axios';

export default {
  requestStockDataAPI: async (stockSymbol) => {
    try {
      let res = await axios.get(`http://api.marketstack.com/v1/eod?access_key=${process.env.REACT_APP_MARKET_STACK}&symbols=${stockSymbol}&limit=100`);
      return res.data.data || [];
    } catch (e){
      console.error(e)
    }
  }
}
// export default {
//   requestStockDataAPI: async (stockSymbol) => {
//     try {
//       console.log(stockSymbol)
//       let res = await axios.get(`http://api.marketstack.com/v1/eod?access_key=${process.env.REACT_APP_MARKET_STACK}&symbols=${stockSymbol}L&limit=100`);
//       return res.data || [];
//     } catch (e){
//       console.error(e)
//     }
//   }
// }