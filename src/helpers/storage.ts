import Cookies from 'js-cookie';

interface DataStorage {
  key: string;
  value: any;
}
type BooleanString = 'true' | 'false';

export const checkKeepLogin = (): boolean => {
  return (localStorage.getItem('session')?.toLowerCase() as BooleanString) === 'true';
};

// cookie
export const getCookieStorage = (key: string): any => Cookies.get(key);

export const setOneCookieStorage = (key: string, data: string | number | any): any => {
  Cookies.set(key, typeof data === 'object' ? JSON.stringify(data) : data, {
    domain: process.env.REACT_APP_DOMAIN_COOKIE,
  });
  // checkKeepLogin()
  //   ? Cookies.set(key, typeof data === 'object' ? JSON.stringify(data) : data)
  //   : window.sessionStorage.setItem(key, typeof data === 'object' ? JSON.stringify(data) : data);
};

export const setAllCookieStorage = (data: DataStorage[]): any => {
  data.forEach((item) => setOneCookieStorage(item.key, item.value));
};

export const removeOneCookieStorage = (key: string): any => {
  // checkKeepLogin() ? Cookies.remove(key) : window.sessionStorage.removeItem(key);
  Cookies.remove(key, {
    domain: process.env.REACT_APP_DOMAIN_COOKIE,
  });
};

export const removeAllCookieStorage = (data: string[]): any => data.forEach((item) => removeOneCookieStorage(item));

// local storage
export const setLocalStorage = <T>(key: string, value: T): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
  // checkKeepLogin()
  //   ? window.localStorage.setItem(key, JSON.stringify(value))
  //   : window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const value: any = window.localStorage.getItem(key);
  if (!value) {
    return null;
  } else {
    return JSON.parse(value);
  }
};

export const removeLocalStorage = (key: string): void => {
  // checkKeepLogin() ? window.localStorage.removeItem(key) : window.sessionStorage.removeItem(key);
  window.localStorage.removeItem(key);
};
