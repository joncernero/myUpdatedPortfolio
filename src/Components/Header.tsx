import React, { useState } from 'react';
import Styled from 'styled-components';
import Navigation from './Nav';
import NavBar from './NavBar';

const Header = () => {
  const [navBarActive, setNavBarActive] = useState(false);

  const toggleNavBar = () => {
    setNavBarActive(!navBarActive);
  };

  return (
    <Container>
      <Navigation toggleNavBar={toggleNavBar} />
      {navBarActive ? <NavBar toggleNavBar={toggleNavBar} /> : null}
    </Container>
  );
};

export default Header;

export const Container = Styled.div`
    display: flex;
    height: 10vh;
    background-color: #464866;
    color: '#FFFFFF';
    
`;
