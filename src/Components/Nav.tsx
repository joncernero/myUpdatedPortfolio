import React, { useState } from 'react';
import Styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import NavBar from './NavBar';
import { motion } from 'framer-motion';

type Props = {
  toggleNavBar: Function;
};

const Navigation = (props: Props) => {
  return (
    <>
      <Container
        as={motion.div}
        drag
        onClick={() => {
          props.toggleNavBar();
        }}>
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
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #2E9CCA;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

`;
