export enum THEME_MODE {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
}

export interface ThemeState {
  themeMode: THEME_MODE;
  mobile: boolean;
}
