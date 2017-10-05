import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function AuthenticationWrapper(WrappedContent, settings = {}) {
  class BaseAuthWrapper extends React.Component {
    ensureUserLoaded(currentUser) {
      return currentUser.hasLoaded;
    }

    ensureUserRole(currentUser){
      if (Array.isArray(settings.roles)) {
        return settings.roles.indexOf(currentUser.role) > -1;
      }
      throw new Error("AuthenticationWrapper settings.roles expected an Array, received: " + typeof settings.roles);
    }

    validateCredentials(){
      const { currentUser } = this.props;
      switch (true) {
        case (!this.ensureUserLoaded(currentUser) && settings.signedIn):
        case (!this.ensureUserRole(currentUser) && settings.roles):
          return false;
        default:
          return true;
      }


    }

    render(){
      if(this.validateCredentials()){
        return <WrappedContent {...this.props}/>;
      }
      return null;
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