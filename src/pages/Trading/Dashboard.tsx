import classnames from 'classnames/bind';
import React from 'react';
import styles from './Dashboard.module.scss';

const cx = classnames.bind(styles);

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <div className={cx('future-wrapper')}>VRF Project</div>
    </>
  );
};

export default Dashboard;
