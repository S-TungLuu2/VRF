export const MOBILE_DIMENSION = 768;
export const TIMEOUT = 20000;

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const DATE_TIME_FORMATTER = 'yyyy-MM-DD HH:mm:ss';
export const RECORDS_PER_PAGE = 4;
export const DISPLAY_RECORD_NUMBER = 30;
