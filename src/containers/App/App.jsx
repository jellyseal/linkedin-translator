import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../../components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Search} path={'/'} />
        </Switch>
      </BrowserRouter>
        hola
      </div>
    );
  }
}

export default App;
