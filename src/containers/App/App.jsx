import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';

// Custom components import
import Search from '../Search';
import TopBar from '../../components/TopBar';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <TopBar/>
        <BrowserRouter>
          <Switch>
            <Route component={Search} path={'/'} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
