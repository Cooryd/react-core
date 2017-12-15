import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function AuthenticationWrapper(WrappedContent, settings = {}, LoadingComponent, UnauthenticatedComponent, UserFetchErrorComponent) {
  class BaseAuthWrapper extends React.Component {
    ensureUserRole(currentUser){
      if (Array.isArray(settings.roles)) {
        return settings.roles.indexOf(currentUser.role) > -1;
      }
      throw new Error("AuthenticationWrapper settings.roles expected an Array, received: " + typeof settings.roles);
    }

    render(){
        const { currentUser } = this.props;

        switch (true) {
            case (!currentUser.fetchResponse):
              return LoadingComponent ? <LoadingComponent /> : null;
            case (settings.isLoggedIn && currentUser.fetchResponse === 'UNAUTHENTICATED'):
              return UnauthenticatedComponent ? <UnauthenticatedComponent /> : null;
            case (settings.isLoggedIn && currentUser.fetchResponse === 'ERROR'):
              return UserFetchErrorComponent ? <UserFetchErrorComponent /> : null;
            case (settings.roles && !this.ensureUserRole(currentUser)):
                return null;
            default:
                return <WrappedContent {...this.props}/>;
        }
    }
  }

  function mapStateToProps(state) {
    return {
      currentUser: state.currentUser
    };
  }

  BaseAuthWrapper.propTypes = {
    currentUser: PropTypes.object.isRequired
  };

  return connect(mapStateToProps)(BaseAuthWrapper);
}