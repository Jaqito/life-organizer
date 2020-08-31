import React from 'react';
import {Feed} from "../../../components";
import { connect } from 'react-redux';
import {selectStockNews} from "../../../redux/selectors/stocks";

const StockFeed = ({stockNews}) => {
  const test = stockNews.slice(0, 20);
  return <Feed feedItems={test}/>
};

function mapStateToProps(state){
  return {
    stockNews: selectStockNews(state)
  }
}

export default connect(mapStateToProps)(StockFeed);