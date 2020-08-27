const formatGraphData = (data, propertiesToGetForGraph, graphHeaderNames) => {
  const selectedData = data.map((d) => {
    return propertiesToGetForGraph.map(prop => {
      if(prop === 'date'){
        return new Date(d[prop])
      }
      else return d[prop]
    });
  });
  return [graphHeaderNames, ...selectedData]
};

export default formatGraphData;
