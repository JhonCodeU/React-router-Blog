import React from 'react'
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>My personal Blog</Title>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = Styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Menu = Styled.nav`
  a{
  text-decoration: none;
  color: #165168;
  margin: 0 10px;
  }

  a:hover{
    color: #19186;
  }

  a.active{
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

const Title = Styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

export default Header;