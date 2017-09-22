import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import '../../styles/layout.less';

class Layout extends React.Component {

  getContainerOffsetHeight(){
    const headerElement = document.getElementById('header');
    let headerElementHeight = 0;

    if(headerElement){
      headerElementHeight = headerElement.offsetHeight;
    }

    return headerElementHeight;
  }

  render(){
    const { children } = this.props;
    const containerStyle = {
      height: `calc(100vh - ${this.getContainerOffsetHeight()}px)`
    };

    return(
      <div className="app-layout-container" style={containerStyle}>
        <div style={{width: 'auto'}}>
          <Glyphicon glyph="star" />
        </div>
        <div className="app-layout-content">
          { children }
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;