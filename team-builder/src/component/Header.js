import React from "react";
import { Row, Col, Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <Row className="mb-5">
      <Col xs="12">
        <Navbar color="primary" light expand="md">
          <NavLink
            to="/"
            className="navbar-brand"
            onMouseDown={e => e.preventDefault()}
          >
            Team Builder
          </NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                to="/add-new-member"
                className="nav-link"
                onMouseDown={e => e.preventDefault()}
              >
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;