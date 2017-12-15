/* eslint-disable */
import React from 'react';
import AuthenticationWrapper from '../../core/Authentication';
import { FetchingUser, UnauthenticatedUser, ErrorFetching } from '../../core/Authentication';

class Home extends React.Component {
  render(){
    return(
      <div> Home page </div>
    );
  }
}
Home.propTypes = {
};

export default Home = AuthenticationWrapper(Home, { isLoggedIn: true }, FetchingUser, UnauthenticatedUser, ErrorFetching);