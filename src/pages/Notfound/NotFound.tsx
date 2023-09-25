import React from 'react';
import classnames from 'classnames/bind';
import styles from './NotFound.module.scss';
import NotFoundImg from 'src/assets/img/404.svg';

const cx = classnames.bind(styles);

const NotFound: React.FC = () => {
  return (
    <div className={cx('wrapper')}>
      <div>
        <img src={NotFoundImg} />
        <div className={cx('text-desc')}>Not Found Page</div>
      </div>
    </div>
  );
};

export default NotFound;
