import React from 'react';
import Styled from 'styled-components';
import Navigation from './Nav';
import Home from '../Pages/Home';

const Contents = () => {
  return (
    <Container>
      <Navigation />
      <Home />
    </Container>
  );
};

export default Contents;

export const Container = Styled.div`
    background-color: #464866;
    height: 90vh;
    width: 100vw;
    display: flex;
`;
