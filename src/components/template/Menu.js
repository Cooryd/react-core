import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, Glyphicon, Navbar } from 'react-bootstrap';

class Menu extends React.Component {
  generateMenuItemComponents(){
    const { menuItems } = this.props;
    let itemList = [];

    menuItems.map(
      (item, index) => {
        itemList[index] = <NavItem key={index} eventKey={index} >{ item.icon  ? <Glyphicon glyph={item.icon} /> : index } <span className="nav-label">{item.title}</span></NavItem>;
      }
    );

    return itemList;
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
                { this.generateMenuItemComponents().map( item => item ) }
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