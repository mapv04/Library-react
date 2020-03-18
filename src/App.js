import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/tailwind-styles.css';

//Pages
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
