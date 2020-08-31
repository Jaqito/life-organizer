import React from 'react';
import { Chart } from "react-google-charts";
import {formatGraphData} from "../../helpers";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(() => ({
  root: {
  }
}));

const GoogleChart = ({data, propertiesToGetForGraph, graphHeaderNames, title}) => {
  const classes = useStyles();
  if(data.length === 0){
    return <></> //todo: improve?
  }
  const formattedData = formatGraphData(data, propertiesToGetForGraph, graphHeaderNames);
  return (
    <Chart
      chartType="AreaChart"
      data={formattedData}
      options={{
        chartArea: {
          width: '90%'
        },
        legend: {
          position: 'none'
        },
        title: title,
        titleTextStyle: {
          fontSize: 30,
        },
        height: "500px",
        width: '100%',
        explorer: {
          actions: ['dragToZoom', 'rightClickToReset'],
          keepInBounds: true,
          axis: 'horizontal',
        },
      }}
    />
  )
};

export default GoogleChart;