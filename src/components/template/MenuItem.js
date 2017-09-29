import React from 'react';
import PropTypes from 'prop-types';
import {
  NavItem,
  Glyphicon,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap';

class MenuItem extends React.Component {
  renderNavItem(){
    const { menuItem, index } = this.props;
    return (
      <NavItem eventKey={index} >
        {menuItem.icon  ? <Glyphicon glyph={menuItem.icon} /> : index}
        <span className="nav-label">{menuItem.title}</span>
      </NavItem>
    );
  }

  render(){
    const {showTooltip, menuItem} = this.props;
    const tooltip = <Tooltip id="tooltip">{menuItem.title}</Tooltip>;
    if (showTooltip) {
      return (
        <OverlayTrigger placement="right" overlay={tooltip} >
          {this.renderNavItem()}
        </OverlayTrigger>
      );
    }

    return this.renderNavItem();

  }
}

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  showTooltip: PropTypes.bool,
};

export default MenuItem;