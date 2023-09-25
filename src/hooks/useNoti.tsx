import classnames from 'classnames/bind';
import {
  OptionsObject,
  SnackbarKey,
  SnackbarProvider,
  useSnackbar as useDefaultSnackbar,
  VariantType,
} from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toastIconError, toastIconSuccess, toastIconCancel, IconCloseToast } from 'src/assets/icon';
import styles from 'src/hooks/NotiStack.module.scss';
import store from 'src/store/store';

const getNotiWrapClassName = (variant: VariantType) => {
  switch (variant) {
    case 'success':
      return 'noti-success';
    case 'error':
      return 'noti-error';
    case 'info':
      return 'noti-info';
    default:
      return '';
  }
};

export type NotiData = {
  title?: string;
  message?: string;
  subMessage?: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useNoti = () => {
  const { enqueueSnackbar, closeSnackbar } = useDefaultSnackbar();
  const pushNoti = (data: NotiData, options?: OptionsObject) => {
    return enqueueSnackbar(data.message, {
      ...options,
      content: (key) => {
        const cx = classnames.bind(styles);
        const variant = options?.variant || 'success' || 'info';
        return (
          <div className={cx('wrapper', getNotiWrapClassName(variant), 'flex-box-row-start')}>
            <div className={cx('noti-icon')}>
              {variant == 'error' && <img src={toastIconError} />}
              {variant == 'success' && <img src={toastIconSuccess} />}
              {variant == 'info' && <img src={toastIconCancel} />}
            </div>
            <div className={cx('noti-content')}>
              <div className={cx('content-title')}>{data?.title}</div>
              <div className={cx('content-message')}>{data?.message}</div>
              <div className={cx('content-sub-message')}>{data?.subMessage}</div>
            </div>
            <div className={cx('noti-btn-close')}>
              <IconCloseToast
                onClick={() => {
                  closeSnackbar(key);
                }}
              />
            </div>
          </div>
        );
      },
    });
  };

  const closeNoti = (key: SnackbarKey) => closeSnackbar(key);

  const pushNotiSuccess = (
    data: {
      title?: string;
      message?: string;
      subMessage?: string;
    },
    options?: OptionsObject,
  ) =>
    pushNoti(data, {
      ...options,
      variant: 'success',
    });

  const pushNotiError = (
    data: {
      title?: string;
      message?: string;
      subMessage?: string;
    },
    options?: OptionsObject,
  ) =>
    pushNoti(data, {
      ...options,
      variant: 'error',
    });

  const pushNotiCancel = (
    data: {
      title?: string;
      message?: string;
      subMessage?: string;
    },
    options?: OptionsObject,
  ) =>
    pushNoti(data, {
      ...options,
      variant: 'info',
    });

  return { pushNoti, closeNoti, pushNotiSuccess, pushNotiError, pushNotiCancel };
};

type DisplayProps = {
  data: NotiData;
  variant: VariantType;
};

const DisplayNone: React.FC<DisplayProps> = (props: DisplayProps) => {
  const { pushNoti } = useNoti();
  pushNoti(props.data, { variant: props.variant });
  return <div></div>;
};

export const noti = {
  success: function (data: NotiData): void {
    this.toast(data, 'success');
  },
  error: function (data: NotiData): void {
    this.toast(data, 'error');
  },

  info: function (data: NotiData): void {
    this.toast(data, 'info');
  },

  toast: function (data: NotiData, variant: VariantType): void {
    const mountPoint = document.getElementById('snackbarhelper');
    ReactDOM.render(
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={5}
          autoHideDuration={5000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <DisplayNone data={data} variant={variant} />
        </SnackbarProvider>
      </Provider>,
      mountPoint,
    );
  },
};
