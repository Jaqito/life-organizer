import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    red: {
      background: 'rgba(255,1,1,1)',
      color: 'white',
      textAlign: 'center',
      padding: '0px 2px',
      border: 0,
      borderRadius: 3,
    },
    green: {
      background: 'rgb(26, 237, 34)',
      color: 'white',
      textAlign: 'center',
      padding: '0px 2px',
      border: 0,
      borderRadius: 3,
    },
});

const ListPresentational = ({itemsToDisplay, handleClickForParent, subHeaderText}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState();
  const handleListItemClick = (event, index, item) => {
    setSelectedIndex(index);
    if(handleClickForParent){
      handleClickForParent(item);
    }
  };

  const listItems = itemsToDisplay.map((item, i) => {
    const extraText = item.extraDetails ?
      <ListItemText classes={{primary: item.extraTextColor ? classes[item.extraTextColor] : null}}
                                                        primary={item.extraDetails}
                                                        style={{display:'flex', justifyContent:'flex-end'}}/> : null;
    return (
      <ListItem
        key={item.name + i}
        button
        selected={selectedIndex === i}
        onClick={(event) => handleListItemClick(event, i, item)}
      >
        <ListItemText primary={item.name} />
        {extraText}
      </ListItem>
    )
  })
   const subHeader = subHeaderText ? <ListSubheader>{subHeaderText}</ListSubheader> : null;
  return (
    <List subheader={subHeader}>
      {listItems}
    </List>
  )
};

export default ListPresentational;