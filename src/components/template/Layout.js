import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import '../../styles/layout.less';

class Layout extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      offsetHeight: 0
    };
  }

  componentDidMount(){
    this.setContainerOffsetHeight();
  }

  setContainerOffsetHeight(){
    const self = this;
    document.addEventListener("DOMContentLoaded", () => {
      const headerElement = document.getElementById('header');
      let headerElementHeight = 0;
      if(headerElement){
        headerElementHeight = headerElement.offsetHeight;
      }

       self.setState({offsetHeight: headerElementHeight});
    });
  }

  render(){
    const { children } = this.props;
    const containerStyle = {
      height: `calc(100vh - ${this.state.offsetHeight}px)`
    };

    const itemLists = [{icon: 'home'}, {icon: 'user'}];

    return(
      <div className="app-layout-container" style={containerStyle}>
        <div style={{width: 'auto'}}>
          <Menu menuItems={itemLists} />
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