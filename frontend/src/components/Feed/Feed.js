import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {shortenString} from "../../helpers/shortenString";
import {newsData} from "../../helpers/testData";

const useStyles = makeStyles((theme) => ({
  root: {
    //height: '100%',
  },
  inline: {
    display: 'inline',
  },
}));


const Feed = ({feedItems, }) => {
  const openInNewTab = (url) => {
    window.open(url);
  };
  const classes = useStyles();
  const listItems = feedItems.map(item => { //todo: switch back to feed items
      return  (
        <ListItem
                  button
                  alignItems="flex-start"
                  onClick={() => openInNewTab(item.url)}
        >
        <ListItemAvatar>
          <Avatar alt="$" src={item.urlToImage} />
        </ListItemAvatar>
        <ListItemText
          primary={item.source.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {shortenString(item.description, 300)}
              </Typography>
            </React.Fragment>
          }
        />
        </ListItem>);
    })
  return (<List className={classes.root}>
    {listItems}
  </List>)
  };

export default Feed;


