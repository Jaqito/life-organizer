import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";



const ListPresentational = ({itemsToDisplay, handleClickForParent}) => {
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index, item) => {
    setSelectedIndex(index);
    if(handleClickForParent){
      handleClickForParent(item);
    }
  };

  const listItems = itemsToDisplay.map((item, i) => {
    //todo: Logo
    // const logo = <ListItemIcon>
    //   <div style={{height: "50px", width: "100px"}}>
    //     <img
    //       style={{maxHeight: '100%', width: '100%', objectFit: 'contain'}}
    //       src={`https://logo.clearbit.com/${stock}.com`}
    //     />
    //   </div>
    //  </ListItemIcon>;

    return (
      <ListItem
        button
        selected={selectedIndex === i}
        onClick={(event) => handleListItemClick(event, i, item)}
      >
        <ListItemText primary={item.name} />
      </ListItem>
    )
  })
  return (
    <List>
      {listItems}
    </List>
  )
};

export default ListPresentational;