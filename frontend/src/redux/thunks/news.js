import newsAPI from "../../api/newsAPI";
import {requestNewsData} from "../actions/news";

export const requestNewsDataAsync = (query) => {
  return async (dispatch, getState) => {
    try {
      const topHeadlines = await newsAPI.requestTopHeadlinesAPI(query);
      dispatch(requestNewsData(topHeadlines));
    } catch(e){
      console.error(`Error getting news data`, e);
      throw(e)
    }
  }
};