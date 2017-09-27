/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Layout from './template/Layout';
import { PageNotFoundComponent } from './404';
class App extends React.Component {
  render() {
    const Home = () =>  <div>Home</div>;
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFoundComponent} />
        </Switch>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;