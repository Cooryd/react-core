import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import Menu from './Menu';
import '../../styles/layout.less';
import { MOBILE_LAYOUT_WIDTH } from '../../constants/layoutConstants';

class Layout extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      offsetHeight: 0,
      layout: 'desktop'
    };

    this.setAppLayout = this.setAppLayout.bind(this);
  }

  componentDidMount(){
    this.setContainerOffsetHeight();
    this.setAppLayout();
    window.addEventListener('resize', this.setAppLayout);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setAppLayout);
  }

  setAppLayout(){
    this.setState({mobileLayout: window.innerWidth < MOBILE_LAYOUT_WIDTH ? 'mobile' : 'desktop'});
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

    const itemLists = [{icon: 'home', title: 'Home'}, {icon: 'user', title: 'User'}];

    return(
      <div className={`app-layout-container ${this.state.mobileLayout}-layout`} style={containerStyle}>
        <div style={{width: 'auto'}}>
          <Menu menuItems={itemLists} layoutStyle={this.state.mobileLayout}/>
        </div>
        <div className="app-layout-content">
          <Grid fluid>
            { children }
          </Grid>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;