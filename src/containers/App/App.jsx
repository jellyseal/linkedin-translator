import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store, history } from '../../config/configureStore';

import styles from './App.module.scss';

// Custom components import
import Search from '../Search';
import Job from '../Job';
import TopBar from '../../components/TopBar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.App}>
          <TopBar/>
          <ConnectedRouter history={history}>
            <Switch>
              <Route component={Job} path={'/job/:id'} />
              <Route component={Search} path={'/'} />
            </Switch>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
