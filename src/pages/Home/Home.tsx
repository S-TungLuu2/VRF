import classnames from 'classnames/bind';
import React from 'react';
import styles from './Home.module.scss';

const cx = classnames.bind(styles);

const Home: React.FunctionComponent = () => {
  return (
    <>
      <div className={cx('future-wrapper')}>VRF Project</div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pitnxdaUfhI?si=duMuwr6XzuOX23zf"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Home;
