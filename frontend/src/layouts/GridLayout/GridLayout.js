import React from 'react'
import {
  Grid,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {FormRows} from './components'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const GridLayout = ({itemsPerRow, items}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <FormRows itemsPerRow={itemsPerRow} items={items}/>
      </Grid>
    </div>
  )
};

export default GridLayout