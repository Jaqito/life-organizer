import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListPresentational} from "../../../components";
import { connect } from 'react-redux';
import {requestStockDataAsync} from "../../../redux/thunks/stocks";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function StockList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <ListPresentational
          handleClickForParent={props.requestStockData}
          itemsToDisplay={[
            {name: 'Apple', symbol: 'AAPL'}, {name: 'Facebook', symbol: 'FB'},
            {name: 'Uber', symbol: 'UBER'}, {name: 'Softbank', symbol: 'SFTBY'}
            ]}
        />
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    requestStockData: (stockSelected) => dispatch(requestStockDataAsync(stockSelected))
  }
}

export default connect(null, mapDispatchToProps)(StockList)

