import classnames from 'classnames/bind';
import React from 'react';
import styles from './Dashboard.module.scss';
import { Sankey } from 'src/components/Sankey/Sankey';

const cx = classnames.bind(styles);

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <Sankey />
    </>
  );
};

export default Dashboard;
