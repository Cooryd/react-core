import React from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  generateMenuItemComponents(){
    const { menuItems, layoutStyle } = this.props;

    return menuItems.map(
      (item, index) => <MenuItem key={index} index={index} menuItem={item} showTooltip={layoutStyle === 'desktop'} />
    );

  }

  render(){
    const { layoutStyle } = this.props;
    switch(layoutStyle){
      case 'mobile':
        return(
          <Navbar collapseOnSelect >
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                {this.generateMenuItemComponents().map( item => item )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      default:
        return(
          <Nav bsStyle="pills" stacked >
            { this.generateMenuItemComponents().map( item => item ) }
          </Nav>
        );
    }
  }
}

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  layoutStyle: PropTypes.oneOf(['mobile', 'desktop'])
};

export default Menu;