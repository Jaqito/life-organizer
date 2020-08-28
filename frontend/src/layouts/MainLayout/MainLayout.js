
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme  } from '@material-ui/styles';
import { Sidebar, Topbar,  } from './components/';
import { useMediaQuery } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }

  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%',
  }
}));

const MainLayout = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();


  const showSidebar = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: false,
  });

  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: false,
  });


  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = showSidebar ? true : openSidebar;
  return (
    <div>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: showSidebar
        })}
      >
        <Topbar isDesktop={showSidebar} onSidebarOpen={handleSidebarOpen} />
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={showSidebar ? 'persistent' : 'temporary'}
        />
        <main className={classes.content}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout