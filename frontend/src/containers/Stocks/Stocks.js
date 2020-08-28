import React, {} from "react";
import { GoogleChart, PaperPresentational} from "../../components";
import {appleData} from "../../helpers/testData";
import { connect } from 'react-redux';
import {selectStockPricing, selectActiveStock} from "../../redux/selectors/stocks";
import StockFeed from "./StockFeed";
import StockList from "./StockList";
import {Page} from "../../components";

const Stocks = ({activeStockData, stockSymbol}) => {
  ///> ---> logo api
  //todo useState on useEffect /on mount get AAPL
  return (
    <Page>
      <PaperPresentational components={[
            <StockList sizing={3}/>,
            <GoogleChart
              graphHeaderNames={['Day', 'Price']}
              propertiesToGetForGraph={['date', 'close']}
              data={activeStockData} //appleData[0].data
              sizing={9}
              title={stockSymbol} //{'AAPL'}
            />,
            <StockFeed sizing={12} />
        ]}
      />
    </Page>
  )
};

function mapStateToProps(state){
  return {
    activeStockData: selectStockPricing(state),
    stockSymbol: selectActiveStock(state),
  }
}


export default connect(mapStateToProps)(Stocks)
