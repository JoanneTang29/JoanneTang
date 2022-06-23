// 1. IMPORT REACT
import React from 'react';

// 2. ADDITIONAL IMPORTS
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Detail from './Detail';

// 3. CREATE COMPONENT
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '30px' }}>
      <Route component={Navigation} />
      {/* 
        First Syntax: Access to custom props. No access to routerProps.
      <Route path="/home">
        <Home homeData="This is data for home component" />
      </Route>
      <Route path="/about">
        <About aboutData="This is data for about component" />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route> */}
      {/* 
        Second Syntax: Access to routerProps. No access to custom props.
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} /> */}
      <Switch>
        {' '}
        <Route
          exact
          path="/"
          render={(routerProps) => {
            return (
              <Home
                {...routerProps}
                homeData="This is data from home component"
              />
            );
          }}
        />
        <Route
          path="/about"
          render={(routerProps) => {
            return <About {...routerProps} />;
          }}
        />
        <Route
          path="/projects"
          render={(routerProps) => {
            return <Projects {...routerProps} />;
          }}
        />
        <Route
          path="/detail/:id?"
          render={(routerProps) => {
            return <Detail {...routerProps} />;
          }}
        />
      </Switch>
    </div>
  );
};

// 4. EXPORT COMPONENT
export default App;
