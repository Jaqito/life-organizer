import axios from 'axios';

export default {
  //todo: specifiy sources (NYT, WSJ, Bloomberg...)
  requestNewsWithQueryAPI: async (query) => {
    try {
      let res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`);
      return res.data.articles || []
    } catch (e){
      console.error(`Error Requesting From News API:`, e);
      throw(e);
    }
  },
  requestTopHeadlinesAPI: async (queryString) => {
    try {
      if(!queryString){
        console.warn('No query string, Add More Sources!');
        return [];
      }
      let res = await axios.get(`https://newsapi.org/v2/top-headlines?${queryString}&pageSize=100&apiKey=${process.env.REACT_APP_NEWS_API}`);
      console.log(res.data);
      return res.data.articles || []
    } catch (e){
      console.error(`Error Requesting From News API:`, e);
      throw(e);
    }
  }
}

//financial-post,recode,hacker-news,new-scientist,wired