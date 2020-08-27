import React, {} from "react";
import {GridLayout} from "../../layouts";
import {CardPresentational, GoogleChart, PaperPresentational} from "../../components";
import {appleData} from "../../helpers/aapl";
import {calculatePercentageChange} from "../../helpers";
import StockList from './StockList';
import { connect } from 'react-redux';
import {selectStock} from "../../redux/selectors/stocks";

const Stocks = (props) => {
  ///> ---> logo api
  const dailyChange = calculatePercentageChange(appleData[0].data[0].open, appleData[0].data[0].close);
  return (
    <PaperPresentational components={[
      <button onClick={() => console.log(props)}>TEST</button>,
        <StockList/>,
          <GoogleChart
            graphHeaderNames={['Day', 'Price']}
            propertiesToGetForGraph={['date', 'close']}
            data={props.activeStockData || []}
          />
      ]}
    />
  )
};

function mapStateToProps(state){
  return {
    stocks: state.stockReducer,
    activeStockData: selectStock(state),
  }
}


export default connect(mapStateToProps)(Stocks)

// <CardPresentational component={
// <div>
//   <GoogleChart
//     graphHeaderNames={['Day', 'Price']}
//     propertiesToGetForGraph={['date', 'close']}
//     data={appleData[0].data}
//   />
//   <Typography>Daily Change {dailyChange}</Typography>
// </div>
// }/>