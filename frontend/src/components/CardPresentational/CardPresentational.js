import React from 'react';
import { Card } from '@material-ui/core';



const CardPresentational = ({component}) => {
  return (<Card>
          {component}
        </Card>)
};

export default CardPresentational