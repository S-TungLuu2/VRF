import { removeAllCookieStorage, setLocalStorage, setOneCookieStorage } from 'src/helpers/storage';

export const useAuth = (): { login: (token: string) => Promise<void>; logout: () => Promise<void> } => {
  const login = async (token: string | undefined): Promise<void> => {
    if (!token || token === 'undefined') return;

    try {
    } catch (error: any) {}
  };

  // logout
  const logout = async (): Promise<void> => {
    removeAllCookieStorage(['access_token', 'refresh_token', 'secret']);
    setOneCookieStorage('isExpired', false);
    setLocalStorage('logout', true);
    try {
    } catch (error) {}
  };
  return {
    login,
    logout,
  };
};
