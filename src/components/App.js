/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Layout from './template/Layout';
class App extends React.Component {
  render() {
    const Home = () =>  <div>Home</div>;
    const NotFoundPage = () =>  <div>404</div>;
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;