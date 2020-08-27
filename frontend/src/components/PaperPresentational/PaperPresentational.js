import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types';
import RouteWithLayout from "../RouteWithLayout";



//map components onto a paper with a grid
const PaperPresentational = ({components,}) => {
  const gridItems = components.map(el => {
  return <Grid item>
          {el}
        </Grid>
  });
  return (
    <Paper elevation={3}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        {gridItems}
      </Grid>
    </Paper>
    )

};

PaperPresentational.propTypes = {
  components: PropTypes.array.isRequired,
};

export default PaperPresentational