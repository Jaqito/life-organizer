import {
  REQUEST_NEWS_DATA
} from "../actions/news";

const initialState = {
  newsGridData: []
};

const newsReducer =  (state = initialState, action, ) => {
  switch (action.type) {
    case REQUEST_NEWS_DATA: {
      return {
        ...state,
        newsGridData: [...state.newsGridData, ...action.requestNewsData]
      }
    }
    default:
      return state
  }
};

export default newsReducer;