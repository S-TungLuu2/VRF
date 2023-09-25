import { AppBar, Toolbar } from '@material-ui/core';
import classnames from 'classnames/bind';
import React from 'react';
import useScreen from 'src/hooks/useScreen';
import styles from './NavBar.module.scss';

const cx = classnames.bind(styles);

const NavBar: React.FunctionComponent = () => {
  const { isDesktop } = useScreen();

  return (
    <AppBar position={'static'} className={cx('navbar')}>
      <Toolbar disableGutters={!isDesktop && true} className={cx('tool-bar')}>
        {/* <Box className={cx('logo')}>
          <img src={Logo} />
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
