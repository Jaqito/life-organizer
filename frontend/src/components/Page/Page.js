//container page for centering elements
import React, { forwardRef } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    minHeight: '100%',
    padding: theme.spacing(3),
  }
}));

const Page = forwardRef(({
 children,
 ...rest
}, ref) => {
  const classes = useStyles();
  return (
    <div
      ref={ref}
      {...rest}
      className={classes.root}
    >
      {children}
    </div>
  );
});
export default Page