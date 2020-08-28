import React from 'react';
import InfiniteScroll  from "react-infinite-scroll-component";

function InfiniteScroller({fetchMoreData, elementsToScroll, components}){
  return (
    <InfiniteScroll
      dataLength={elementsToScroll.length} //This is important field to render the next data
      next={fetchMoreData}
      hasMore={true}
      scrollThreshold={0.95}
      >
      {components}
  </InfiniteScroll>)
}

export default InfiniteScroller;
