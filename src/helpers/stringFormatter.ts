import moment from 'moment';

export const formatTxhash = (txhash: string): string => {
  return txhash?.length > 7 ? `${txhash.slice(0, 3)}...${txhash.slice(-4)}` : '--';
};

export const formatTime = (time: string | null | undefined | number): string => {
  if (!time) return '--';
  return moment(time).format('YYYY-MM-DD HH:mm:ss');
};

export const formatTimeV2 = (time: string | null | undefined): string => {
  if (!time) return '--';
  return moment(time).format('DD-MM-YYYY');
};

export const formatTimeV3 = (time: string | null | undefined): string => {
  if (!time) return '--';
  return moment(time).format('DD-MM-YYYY HH:mm');
};

export const formatTimeV4 = (time?: string | number, pattern = 'YYYY-MM-DD HH:mm'): string => {
  if (!time) return '--';
  return moment(time).format(pattern);
};

export const formatTimeV5 = (time: string | null | undefined): string => {
  if (!time) return '--';
  return moment(time).format('YYYY-MM-DD HH:mm');
};

export const formatTimeV6 = (time: string | null | undefined): string => {
  if (!time) return '--';
  return moment(time).format('MM/DD');
};

export const formatTimeV7 = (time: string | null | undefined | number): string => {
  if (!time) return '--';
  return moment(time).format('YY-MM-DD HH:mm');
};
export const formatTimeV8 = (time: string | null | undefined | number): string => {
  if (!time) return '--';
  return moment(time).format('MM/DD HH:mm');
};

export const formatString = (str: string | undefined): string => {
  if (!str) {
    return '--';
  }
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();
};
