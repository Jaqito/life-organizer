import React, {useEffect, useState} from 'react';
import GridImageList from "../../../../components/GridImageList";
import {InfiniteScroller} from "../../../../components";
import { connect } from 'react-redux';
import {selectNews} from "../../../../redux/selectors/news";
import {requestNewsDataAsync} from "../../../../redux/thunks/news";

const queries = ['sources=techcrunch,bloomberg,the-wall-street-journal', 'sources=financial-post,recode,hacker-news,new-scientist,',
  'language=en&category=business', 'language=en&category=technology',];

function NewsImageList({newsImages, requestNews}){

  const [newsPagination, setNewsPagination] = useState(0);

  const endOfScroll = async () => {
    if(newsPagination - 1 >= queries.length){
      setNewsPagination(0);
      await requestNews(queries[0]);
    } else {
      setNewsPagination(prevNewsPagination => prevNewsPagination + 1);
      await requestNews(queries[newsPagination]);
    }
  };

  useEffect(() => {
    requestNews(queries[0]);
    setNewsPagination(1);
  }, []);

  return (
    newsImages ? (
      <InfiniteScroller elementsToScroll={newsImages} fetchMoreData={endOfScroll}
                        components={<GridImageList gridImages={newsImages}/>}
      >
      </InfiniteScroller>
    ) : <></>
  )
}

function mapStateToProps(state){
  return {
    newsImages: selectNews(state)
  }
}

function mapDispatchToProps(dispatch){
  return {
    requestNews: (query) => dispatch(requestNewsDataAsync(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsImageList);