import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/helper/FallbackSpinner';
import NavBarWithRouter from './components/helper/NavBar';
import Home from './components/mainPage/Home';
import { routes } from './profile/routes';

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(routes);
  }, []);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        
        <Switch className="switch-container">
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/PersonalWebsite" component={Home} />
            {data
              && data.map((route) => {
                const SectionComponent = React.lazy(() => import('./components/mainPage/' + route.component));
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    component={() => (
                      <SectionComponent />
                    )}
                  />
                );
              })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
