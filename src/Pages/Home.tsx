import React from 'react';
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../Components/Avatar';

const Home = () => {
  return (
    <>
      <FlexContainer>
        <FlexOne>
          <h1>
            JONATHAN
            <br />
            CERNERO
          </h1>
          <h2>
            Junior Web
            <br />
            Developer
          </h2>
        </FlexOne>
        <FlexTwo as={motion.div} drag>
          <Me></Me>
        </FlexTwo>
      </FlexContainer>
    </>
  );
};

export default Home;

export const FlexContainer = Styled.div`
    display: flex;
   align-self: center;
   

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    
`;

export const FlexOne = Styled.div`
width: 50vw;
    
    h1 {
        color: #FFFFFF;
        text-align: right;
    }
    h2 {
        color: #e3e4e8;
        text-align: right;
    }
`;

export const FlexTwo = Styled.div`
    display: flex;
    justify-content: left;
    width: 50vw;
    padding: 0;
    /* flex-direction: column; */

`;
