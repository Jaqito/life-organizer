import React from 'react';
import { Chart } from "react-google-charts";
import {formatGraphData} from "../../helpers";

const GoogleChart = ({data, propertiesToGetForGraph, graphHeaderNames}) => {
  const formattedData = formatGraphData(data, propertiesToGetForGraph, graphHeaderNames);
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="100%"
      data={formattedData}
      options={{
        explorer: {
          actions: ['dragToZoom', 'rightClickToReset'],
          keepInBounds: true,
          axis: 'horizontal',
        }
      }}
    />
  )
};

export default GoogleChart;