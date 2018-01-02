/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route } from 'react-router-dom';
import Layout from './template/Layout';
import { PageNotFoundComponent } from './404';
import Home  from './screen/Home';
import * as actions  from '../actions/userActions';

class App extends React.Component {
  componentDidMount(){
    this.props.actions.fetchUserDetails();
  }

  render() {
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
  children: PropTypes.element,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(App);