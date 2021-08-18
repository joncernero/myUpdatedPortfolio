import React from 'react';
import Styled from 'styled-components';
import Navigation from './Nav';

const Header = () => {
  return (
    <Container>
      <Navigation />
      <h1>Jonathan</h1>
    </Container>
  );
};

export default Header;

export const Container = Styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    background-color: #212345;
    color: '#FFFFFF';
    

    h1 {
      color: #FFFFFF;
      text-align: center;
    }
`;
