import { AppBar, Toolbar } from '@material-ui/core';
import classnames from 'classnames/bind';
import React from 'react';
import useScreen from 'src/hooks/useScreen';
import styles from './NavBar.module.scss';
import { Box } from '@mui/system';
import SelectBox from '../SelectBox/SelectBox';

const cx = classnames.bind(styles);

const NavBar: React.FunctionComponent = () => {
  const { isDesktop } = useScreen();

  return (
    <AppBar position={'static'} className={cx('navbar')}>
      <Toolbar disableGutters={!isDesktop && true} className={cx('tool-bar')}>
        <Box className={cx('logo')}>
          <img src={'https://www.bemserver.org/wp-content/themes/bemserver/images/sticky-bemserver-logo.png'} />
        </Box>
        <SelectBox
          title={'Dashboard'}
          options={[
            {
              label: `Sankey Diagram`,
              href: '/dashboard',
            },
          ]}
        />
        <SelectBox
          title={'Chart'}
          options={[
            {
              label: `Treemap`,
              href: '/treemap',
            },
          ]}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
