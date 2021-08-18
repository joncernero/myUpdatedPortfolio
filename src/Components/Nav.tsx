import React, { useState } from 'react';
import Styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';

const Navigation = () => {
  const [navBarActive, setNavBarActive] = useState(false);

  const toggleNavBar = () => {
    setNavBarActive(!navBarActive);
  };

  return (
    <>
      <Container>
        <FaIcons.FaBars />
      </Container>
    </>
  );
};

export default Navigation;

export const Container = Styled.div`
    position: fixed;
    align-self: flex-start;
    color: #FFFFFF;
    font-size: 25px;
    margin: 25px 0 0 25px;
`;
