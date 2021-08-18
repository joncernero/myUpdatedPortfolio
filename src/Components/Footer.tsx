import React from 'react';
import Styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Button>Download Resume</Button>
    </Container>
  );
};

export default Footer;

export const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 10vh;
    background-color: #212345;
    color: #FFFFFF;

    h1 {
        
    }
`;

export const Button = Styled.button`
    height: 35px;
    width: 125px;
    color: #FFFFFF;
    font-size: 10px;
    font-weight: bold;
    background:#2E9CCA;
    border-radius: 10px;
    margin: 5px
`;
