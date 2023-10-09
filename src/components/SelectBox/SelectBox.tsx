import classnames from 'classnames/bind';
import React, { useCallback, useRef } from 'react';
import { LinkIcon } from 'src/assets/icon';
import styles from './SelectBox.module.scss';

const cx = classnames.bind(styles);

export type TOption = {
  label: string;
  value?: string | number;
  icon?: string;
  href?: string;
  onAction?: () => void;
};

interface Props {
  title?: string;
  iconTitle?: string;
  options?: TOption[];
  isIcon?: boolean;
  noLink?: boolean;
}

const SelectBox: React.FC<Props> = ({ title, iconTitle, options, isIcon, noLink }) => {
  const rfTitle = useRef<HTMLDivElement>(null);
  const rfUnderPanel = useRef<HTMLUListElement>(null);

  const handleOnTitleMouseEntered = useCallback(() => {
    if (!rfTitle.current) return;
    if (!rfUnderPanel.current) return;
    if (
      window.innerWidth - rfTitle.current.getBoundingClientRect().right <
      rfUnderPanel.current.getBoundingClientRect().width + 20
    ) {
      rfUnderPanel.current.style.right = '0px';
    }
  }, []);

  return (
    <div className={cx('select-wrapper')}>
      <ul>
        <li onMouseEnter={handleOnTitleMouseEntered}>
          {isIcon ? (
            <div className={cx('select-title')} ref={rfTitle}>
              <img src={iconTitle} />
            </div>
          ) : (
            <div className={cx('select-title')} ref={rfTitle}>
              {title}
            </div>
          )}

          {options && (
            <ul className={cx('option')} ref={rfUnderPanel}>
              {options?.map((option, index) => (
                <a
                  key={index}
                  className={cx('option-value', noLink && 'value-no-link')}
                  href={option.href}
                  onClick={option.onAction}
                >
                  {option.icon && <img style={{ marginLeft: '15px' }} width={25} height={25} src={option.icon} />}
                  {option.label && <div className={cx('option-text')}>{option.label}</div>}
                  {!noLink && <img className={cx('link-icon')} src={LinkIcon} />}
                </a>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SelectBox;
