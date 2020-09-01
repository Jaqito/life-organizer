import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListPresentational, SearchField} from "../../../components";
import { connect } from 'react-redux';
import {requestStockDataAsync} from "../../../redux/thunks/stocks";
import {selectStockChanges} from "../../../redux/selectors/stocks";
import { findIndex } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

let stocks = [
  {name: 'Apple', symbol: 'AAPL',}, {name: 'Facebook', symbol: 'FB'},
  {name: 'Uber', symbol: 'UBER'}, {name: 'Softbank', symbol: 'SFTBY'},
  {name: 'Starbucks', symbol: 'SBUX'}, {name: 'Datadog', symbol: 'DDOG'},
  {name: 'Amazon', symbol: 'AMZN'}, {name: 'Altria', symbol: 'MO',},
  {name: 'Peloton', symbol: 'PTON'},
];

function StockList({dailyChanges, requestStockData}) {
  const [stocksList, setStocksList] = useState(stocks);
  const [lastSearchedStock, setLastSearchedStock] = useState();
  useEffect(() => {
    requestStockData({name: 'Apple', symbol: 'AAPL',})
  }, []);

  useEffect(() => {
    //todo: split up
    let copyStocks = [...stocksList];
    Object.keys(dailyChanges).map(stockSymbol => {
      const stockIndex = findIndex(stocksList, {symbol: stockSymbol});
      const extraDetails = '$' + dailyChanges[stockSymbol].closePrice.toFixed(2) + '  ' + dailyChanges[stockSymbol].dailyChange;
      const extraTextColor = dailyChanges[stockSymbol].dailyChange[0] === '-' ? 'red' : 'green';
      if(stockIndex === -1){ //for search if we haven't searched yet
          setLastSearchedStock({
            extraDetails,
            extraTextColor,
            name: stockSymbol, //todo fetch name from request?
            symbol: stockSymbol,
          })
      } else {
        copyStocks[stockIndex].extraDetails = extraDetails;
        copyStocks[stockIndex].extraTextColor = extraTextColor;
      }
    });
    setStocksList(copyStocks);
  }, [dailyChanges]);

  const handleSearchForStock = async (stockSymbol,) => {
    await requestStockData({symbol: stockSymbol, });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
        <SearchField placeholder={'Search For a Stock Symbol'} handleFormForParent={handleSearchForStock}/>
        {lastSearchedStock ? <ListPresentational handleClickForParent={requestStockData}
                                                 itemsToDisplay={[lastSearchedStock]}/> : null}
        <ListPresentational
          handleClickForParent={requestStockData}
          itemsToDisplay={stocksList}
          subHeaderText={'Watch List'}
        />
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    requestStockData: (stockSelected) => dispatch(requestStockDataAsync(stockSelected))
  }
}

function mapStateToProps(state){
  return {
    dailyChanges: selectStockChanges(state), //object of symbol and daily changes
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockList)

