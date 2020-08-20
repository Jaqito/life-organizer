import React from "react";
import {Grid} from "@material-ui/core";
import {chunk} from "lodash";


function FormRows ({items, itemsPerRow}){
  const chunkedItems = chunk(items, itemsPerRow);
  return chunkedItems.map(chunkedItem => {
    return (
      <FormRow chunkedItem={chunkedItem} itemsPerRow={itemsPerRow}/>
    )
  });

  function FormRow({chunkedItem, itemsPerRow}) {
    return (
      <React.Fragment>
          {chunkedItem.map(item => {
            return (
              <Grid xs={12} sm={12/itemsPerRow}>
                {item}
              </Grid>
            )
          })}
      </React.Fragment>
    );
  }
}

export default FormRows;




