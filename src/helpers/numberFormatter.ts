import BigNumber from 'bignumber.js';

export const formatRoundDown = (value: any, decimal: number) => {
  if (value === undefined || value === null || value === '' || isNaN(Number(value))) return '';
  const numFormat = new BigNumber(value).toFixed(decimal >= 0 ? decimal : 2, BigNumber.ROUND_DOWN);
  return numFormat.toString();
};

export const formatNumber = (number: string | undefined | number, precision: number, zeroValue: string): string => {
  if (
    number === undefined ||
    number === null ||
    number === '' ||
    number === 'NaN' ||
    Number(number) === Number.POSITIVE_INFINITY
  ) {
    return Number(zeroValue).toFixed(precision);
  }

  const numFormat = new BigNumber(number).toFixed(Math.abs(precision) || 2, BigNumber.ROUND_DOWN);
  return numFormat.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export function formatMargin(number: string, zeroValue: string): string {
  if (number === undefined || number === null || number === '' || Number.isNaN(number) === true) {
    return zeroValue;
  }
  return number;
}

export function formatOrderEnum(value: string | undefined): string {
  if (!value) {
    return '';
  }
  const parts = value.toLowerCase().split('_');
  return parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

export const formatUSDAmount = (amount: string | undefined): string => {
  return formatNumber(amount, 6, '');
};

export const isNumber = (str: string): boolean => {
  return !new BigNumber(str).isNaN();
};

export const formatPercent = (percent: string | number, precision = 4): string => {
  // percent =  -0.0005, precision = 2
  const number = Number(formatRoundDown(percent, precision)); // number = -0.00
  const numberAfterLimit = number || 0; // numberAfterLimit = 0

  const numberFormat = formatNumber(`${numberAfterLimit}`, precision, `0.${'0'.repeat(precision)}`);
  return `${numberFormat}%`;
};

export const formatIntBalance = (num?: string | number, decimal = 4, fillZero = 0) => {
  if (!num) return '0';
  let balanceSplit = String(num).split('.');

  balanceSplit[1] = balanceSplit.length > 1 ? balanceSplit[1].slice(0, decimal) : '0';
  num = new BigNumber(`${balanceSplit[0]}.${balanceSplit[1]}`).toFixed();
  balanceSplit = String(num).split('.');

  if (balanceSplit.length === 1 || balanceSplit[1] === '0') {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: fillZero,
    });

    return formatter.format(Number(balanceSplit[0]) || 0);
  } else {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
    });
    return `${formatter.format(Number(balanceSplit[0]))}.${balanceSplit[1]}`;
  }
};

export const formatIntBalanceV2 = (num?: string | number, decimal?: number, fillZero = 0) => {
  if (!num) return '0';
  let balanceSplit = String(num).split('.');

  balanceSplit[1] = balanceSplit.length > 1 ? balanceSplit[1].slice(0, decimal) : '0';
  num = new BigNumber(`${balanceSplit[0]}.${balanceSplit[1]}`).toFixed();
  balanceSplit = String(num).split('.');

  if (balanceSplit.length === 1 || balanceSplit[1] === '0') {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: fillZero,
    });

    return formatter.format(Number(balanceSplit[0]) || 0);
  } else {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
    });
    return `${formatter.format(Number(balanceSplit[0]))}.${balanceSplit[1]}`;
  }
};

export const shortenString = (str?: string, maxLength = 30, isNumber?: boolean) => {
  if (!str) return str;
  if (str.length > maxLength) {
    if (isNumber) {
      const replaceAll = str.replaceAll(',', '');
      let num = replaceAll.slice(0, maxLength);
      if (num.includes('.')) {
        num = replaceAll.slice(0, maxLength + 1);
      }
      return `${formatIntBalance(num)}...`;
    }
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
};

export const shortenString2 = (str?: string, maxLength = 30, isNumber?: boolean) => {
  if (!str) return str;
  if (str.length > maxLength) {
    if (isNumber) {
      const replaceAll = str.replaceAll(',', '');
      let num = replaceAll.slice(0, maxLength);
      if (num.includes('.')) {
        num = replaceAll.slice(0, maxLength + 1);
      }
      return `${formatIntBalance(num)}...`;
    }
    return `${str.slice(0, maxLength)}`;
  }
  return str;
};

export const formatNumberVolume = (num: any, currency: any) => {
  // Round to 2 decimal places
  const roundedNum = Math.round(num * 100) / 100;

  // Convert to string with 2 decimal places
  const numStr = roundedNum.toFixed(2);

  if (numStr.length <= 12) {
    // If number has 12 or fewer digits, return it with currency symbol
    return `${currency}${numStr}`;
  } else {
    // If number has more than 12 digits, truncate to 12 digits and add ellipsis and currency symbol
    const truncatedNum = numStr.slice(0, 12) + '...';
    return `${currency}${truncatedNum}`;
  }
};

export const formatNumberAsset = (num: any) => {
  if (isNaN(num)) {
    return '';
  }

  // eslint-disable-next-line prefer-const
  let numStr = num.toString();

  // Split the number into integer and decimal parts
  // eslint-disable-next-line prefer-const
  let parts = numStr.split('.');
  let integerPart = parts[0];
  let decimalPart = parts[1] || '';

  // Truncate the integer part to a maximum of 10 digits
  if (integerPart.length > 10) {
    integerPart = integerPart.slice(0, 10);
  }

  // Truncate the decimal part to a maximum of 4 digits
  if (decimalPart.length > 2) {
    decimalPart = decimalPart.slice(0, 4);
  }

  // Add thousands separators to the integer part
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Check if the total length is greater than 12
  // eslint-disable-next-line prefer-const
  let totalLength = integerPart.length + decimalPart.length;
  if (totalLength > 13) {
    decimalPart = '';
    integerPart = integerPart.slice(0, 9) + '...';
  }

  // Combine the integer and decimal parts
  if (decimalPart.length > 0) {
    return integerPart + '.' + decimalPart;
  } else {
    return integerPart;
  }
};

export const formatNumberMargin = (number: any) => {
  // Kiểm tra nếu tổng số chữ số lớn hơn 11 thì sẽ hiển thị dấu chấm lửng
  const totalDigits = number.toString().length;
  const shouldAddEllipsis = totalDigits > 11;

  // Chuyển đổi số thành chuỗi và tách phần nguyên và phần thập phân
  const [integer, decimal] = number.toFixed(4).toString().split('.');

  // Thêm dấu phẩy ngăn cách giữa các hàng nghìn trong phần nguyên
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Kết hợp lại phần nguyên và phần thập phân
  let formattedNumber = decimal ? `${formattedInteger}.${decimal}` : formattedInteger;

  // Thêm dấu chấm lửng nếu cần thiết
  if (shouldAddEllipsis) {
    formattedNumber += '…';
  }

  return formattedNumber;
};

export const shortenNumber = (number: any, decimalDigits: any, maxDigits: any, empty?: any) => {
  if (isNaN(number)) {
    return empty;
  }
  // Kiểm tra số lượng chữ số phần nguyên + số lượng chữ số phần thập phân
  const numLength = number.toString().replace(/\./g, '').length;
  const limit = numLength > maxDigits ? maxDigits : numLength;

  // Sử dụng hàm toLocaleString() để ngăn cách hàng nghìn bằng dấu phẩy
  const formattedNumber = number.toLocaleString('en-US', {
    maximumFractionDigits: decimalDigits,
    minimumFractionDigits: decimalDigits,
  });

  // Nếu số lượng chữ số lớn hơn maxDigits, chỉ lấy maxDigits chữ số đầu tiên
  if (limit < numLength) {
    return formattedNumber.slice(0, limit + 1) + '...';
  }

  return formattedNumber;
};

export const formatPriceRoundDown = (value: any, decimal: number) => {
  const decimalFinal = decimal >= 0 ? decimal : 2;
  if (
    value === undefined ||
    value === null ||
    value === '' ||
    isNaN(Number(value)) ||
    Number(value) === Number.POSITIVE_INFINITY
  )
    return (0).toFixed(decimalFinal);
  if (decimalFinal === 0) return parseInt(value).toLocaleString();
  const numFormat = new BigNumber(value).toFixed(decimalFinal || 2, BigNumber.ROUND_DOWN);
  return numFormat.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const countCharacter = (number: string) => {
  const numberChars = number.replace(/[-,.]/g, '').length;
  return numberChars;
};

const handleCharacter = (numberFinal: string, characters: number) => {
  const totalCommas = (numberFinal.match(/,/g) || []).length;
  const totalDot = (numberFinal.match(/./g) || []).length;
  const numberSpace = Math.ceil(characters / 3) - 1;
  if (totalCommas >= numberSpace) {
    return numberSpace;
  } else {
    if (totalCommas + totalDot >= numberSpace) return numberSpace;
    return totalCommas + totalDot;
  }
};

export const handleNumber = (number: string, character: number) => {
  if (number === 'NaN') {
    return null;
  }
  const numberChars = countCharacter(number);
  if (numberChars > character) {
    const truncatedNumber = number.slice(0, character + handleCharacter(number, character)) + '...';
    return truncatedNumber;
  }
  return number;
};

export const largeNumber = (value: string | any) => {
  let result = value;
  if (Math.abs(value) < 1.0) {
    const e = parseInt(value.toString().split('e-')[1]);
    if (e) {
      value *= Math.pow(10, e - 1);
      result = '0.' + new Array(e).join('0') + value.toString().substring(2);
    }
  }
  // else {
  //   let e = parseInt(value.toString().split('+')[1]);
  //   if (e > 20) {
  //     e -= 20;
  //     value /= Math.pow(10, e);
  //     result += new Array(e + 1).join('0');
  //   }
  // }
  return result.toString();
};
