import BigNumber from 'bignumber.js';
import { formatRoundDown } from './numberFormatter';

export const fixPrecision = (number: number | BigNumber, precisionParams: string | undefined): string => {
  const precision = precisionParams?.split('.');
  let value;
  if (precision && precision[1] !== undefined && precision[1]) {
    value = precision[1].length;
    return formatRoundDown(number, value);
  }
  return Number(number).toFixed(0);
};
