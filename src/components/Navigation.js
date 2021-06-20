import React from 'react';
import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';
import { Breadcrumbs as _Breadcrumbs } from '@material-ui/core';

const LinkList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1rem;

  color: white;
  font-size: 2rem;
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  color: white;
`;

const Breadcrumbs = styled(_Breadcrumbs)`
  && {
    font-size: 1.3rem;
    font-weight: 300;
    color: white;
  }
`;

const Navigation = () => {
  return (
    <div>
      <LinkList>
        <Breadcrumbs>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Subjects</NavLink>
          <NavLink to="/about">About</NavLink>
        </Breadcrumbs>
      </LinkList>
    </div>
  );
}

export default Navigation;
