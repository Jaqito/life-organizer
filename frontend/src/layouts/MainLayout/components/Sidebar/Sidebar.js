
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import {default as PaymentIcon} from '@material-ui/icons/Payment';
import {default as LineChartIcon} from '@material-ui/icons/ShowChart';
import {default as EmailIcon} from '@material-ui/icons/Email';
import {default as BookIcon} from '@material-ui/icons/Book';
import {default as CalendarIcon} from '@material-ui/icons/Today';





import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Banking',
      href: '/banking',
      icon: <PaymentIcon />
    },
    {
      title: 'Stocks',
      href: '/stocks',
      icon: <LineChartIcon />
    },
    {
      title: 'News',
      href: '/news',
      icon: <BookIcon />
    },
    {
      title: 'Email',
      href: '/email',
      icon: <EmailIcon />
    },
    {
      title: 'Tasks',
      href: '/Tasks',
      icon: <CalendarIcon/>
    },
    //kanban?, podcasts, highlights, etc.
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};


export default Sidebar;