import React from 'react';
import TreeMap from 'src/components/TreeMap/TreeMap';
import styles from './TreeMapDemo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function TreemapDemo() {
  return (
    <div className={cx('map-wrapper')}>
      <TreeMap />
    </div>
  );
}
