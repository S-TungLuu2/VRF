import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavBar from 'src/components/NavBar/NavBar';
import routers from 'src/routes/routes';
import { useAppSelector } from 'src/store/hooks';
import styles from 'src/styles/App.module.scss';

const App: React.FC<any> = () => {
  const theme = useAppSelector((state) => state.theme.themeMode);
  const location = useLocation();
  document.documentElement.setAttribute('data-theme', theme);

  const checkRenderSidebar = (path: string) => {
    return !!['/account'].find((i) => path.indexOf(i) !== -1);
  };

  return (
    <div id="body" className="App">
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className={styles.navbar}>
          <NavBar />
        </div>
        <div className={checkRenderSidebar(location.pathname) ? styles.contentFlex : styles.content} id="main">
          <React.Suspense fallback={<div>....Loading</div>}>
            <Switch>
              {Object.keys(routers).map((key) => {
                //@ts-ignore
                const route = routers[key];
                return <route.route key={route.path} {...route} />;
              })}
              <Route path="*" />
            </Switch>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
