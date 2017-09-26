import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Menu extends React.Component {
  generateMenuItemComponents(){
    const { menuItems } = this.props;
    let itemList = [];

    menuItems.map(
      (item, index) => {
        itemList[index] = <NavItem key={index} eventKey={1} href="/home">{ item.icon ? <Glyphicon glyph={item.icon} /> : index }</NavItem>;
      }
    );

    return itemList;
  }

  render(){
    return(
      <Nav bsStyle="pills" stacked >
        { this.generateMenuItemComponents().map( item => item ) }
      </Nav>
    );
  }
}

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired
};

export default Menu;