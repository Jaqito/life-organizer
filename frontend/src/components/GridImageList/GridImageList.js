import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { openUrlInNewTab } from "../../helpers";
import {IconButton} from "@material-ui/core"
import InfoIcon from '@material-ui/icons/Info'
import {chunk} from 'lodash';
import {getRandomInt} from "../../helpers";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {

  },
  image: {

  },
  icon: {
    color: 'rgba(255,255,255,0.98)',
  }
}));
const pattern = [3, 2, 3, 4, 4, 2, 3, 3, 2, 4, 2, 3, 3, 2];


function GridImageList({gridImages}){
  const classes = useStyles();
  const [adjustedGridImages, setAdjustedGridImages] = useState([]);

  useEffect(() => {
    const filteredImages  = filterArticlesWithoutProperties(gridImages);
    const imagesWithPatten = setPatternForGrid(filteredImages);
    const adjustedImages = adjustPatternOfImages(imagesWithPatten);
    setAdjustedGridImages(adjustedImages);
  }, [gridImages]);

  //todo: don't filter in this list do it outside.


  const filterArticlesWithoutProperties = (imagesToFilter) => imagesToFilter.filter((img => {
    if(img.urlToImage && img.title){
      return img
    }
  }));

  const setPatternForGrid = (imagesToChunk) => {
    let imgs = [];
    const chunked = chunk(imagesToChunk, 14);
    chunked.forEach((chunk, i) => {
      chunk.forEach((img, i) => {
        img.cols = pattern[i];
        if(img.urlToImage && img.title){
          imgs.push(img)
        }
      })
    });
    return imgs;
  };



  const adjustPatternOfImages = (imagesToAdjust) => {
    const mod = imagesToAdjust.length % 14;
    const endOfPatternElements = [0, 3, 5, 8, 11];
    let smallest;
    endOfPatternElements.map((el => {
      if(el <= mod){
        smallest = mod - el;
      }
    }));
    if(!smallest || smallest === 0){
      return imagesToAdjust
    } else {
      imagesToAdjust.splice(-smallest);
      return imagesToAdjust;
    }
  };


  return (
    <div>
      <GridList cellHeight={360} className={classes.gridList} cols={8}>
        {adjustedGridImages ? adjustedGridImages.map((tile, i) => {
                return (<GridListTile title={tile.title} key={tile.urlToImage + i} cols={tile.cols}>
                        <img className={classes.image} src={tile.urlToImage} alt={tile.title} />
                        <GridListTileBar
                          title={tile.title}
                          subtitle={<span>{tile.source.name}</span>}
                          actionIcon={
                            <IconButton onClick={() => openUrlInNewTab(tile.url)}
                                        aria-label={`info about ${tile.title}`}
                                        className={classes.icon}>
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </GridListTile>)

        }) : null}
      </GridList>
    </div>
  )
}

export default GridImageList;

//if(chunk.length === 1) //todo: discard
//else  if(chunk.length === 2)
//    console.log(chunk);
//    chunk.forEach((image, i) => {
//      console.log(i);
//    if(i === 0){
//      const cols = getRandomInt(2, 4);
//      image.cols = cols;
//      imgs.push(image);
//    } else if(i === 1){
//      if(imgs[i - 1].cols === 4){
//        image.cols = 4;
//        imgs.push(image);
//      } else if (imgs[i - 1].cols === 3){
//        image.cols = 2;
//        imgs.push(image);
//      } else {
//        const cols = getRandomInt(2, 4);
//        console.log(cols);
//        image.cols = cols;
//        imgs.push(image);
//      }
//    } else if(i === 2){
//      if(imgs[i - 1].cols + [imgs - 2].cols === 8){
//        //todo: pass for now..
//      } else {
//        console.log({
//          imgsMinus1: imgs[i - 1].cols,
//          imgsMinus2: imgs[i - 2].cols,
//          imgCurr: (8 - (imgs[i - 2].cols + imgs[i - 1].cols),
//        })
//        const cols = 8 - (imgs[i - 1].cols + imgs[i - 2].cols);
//        console.log(cols);
//        image.cols = cols;
//        imgs.push(image);
//      }
//    }
// })