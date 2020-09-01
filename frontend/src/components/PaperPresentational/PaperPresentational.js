import React from 'react'
import { Grid, Paper, Card } from '@material-ui/core'
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    //height: '100%',
  },
  paper: {
    height: '100%',
  }
}));

//map components onto a paper with a grid
const PaperPresentational = ({components,}) => {
  const classes = useStyles();
  const gridItems = components.map((el, i) => {
  return <Grid key={i} item xs={el.props.sizing|| 12}> {/*pass down a size prop or make it full width of container*/}
          <Paper className={classes.paper}>
           {el}
          </Paper>
         </Grid>
  });
  return (
    <Grid container
          justify={"center"}

      >
      <Grid
        spacing={2}
        container
      >
        {gridItems}
      </Grid>
    </Grid>
    )

};

PaperPresentational.propTypes = {
  components: PropTypes.array.isRequired,
};

export default PaperPresentational