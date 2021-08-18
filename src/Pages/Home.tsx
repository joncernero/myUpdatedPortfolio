import React from 'react';
import Styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <FlexContainer>
        <FlexOne>
          <h1>JONATHAN CERNERO</h1>
          <h2>Junior Web Developer</h2>
        </FlexOne>
        <FlexTwo as={motion.div} drag>
          <Avatar>
            <Hair></Hair>
            {/* <HairLeft></HairLeft>
            <HairRight></HairRight> */}
            <Head></Head>
            <Beard>
              <MouthArea></MouthArea>
            </Beard>
          </Avatar>
        </FlexTwo>
      </FlexContainer>
    </>
  );
};

export default Home;

export const FlexContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
`;

export const FlexOne = Styled.div`
    width: 100vw;
    
    h1 {
        color: #FFFFFF;
        text-align: center;
    }
    h2 {
        color: #e3e4e8;
        text-align: center;
    }
`;

export const FlexTwo = Styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const Avatar = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const Hair = Styled.div`
    background-color: #663300;
    position: fixed;
     -webkit-clip-path: polygon(82% 1%, 80% 17%, 99% 13%, 95% 35%, 88% 88%, 82% 32%, 15% 38%, 13% 87%, 3% 29%, 38% 5%);
    clip-path: polygon(82% 1%, 80% 17%, 99% 13%, 95% 35%, 88% 88%, 82% 32%, 15% 38%, 13% 87%, 3% 29%, 38% 5%);
    z-index: 77;
    width: 125px;
    height: 90px;
    margin-top: -19px;
    
`;

export const HairLeft = Styled.div`
    background-color: #663300;
    transform: rotate(7deg);
    width: 5px;
    height: 35px;
    z-index: 70;
    position: fixed;
    margin-right: -95px;
    margin-top: 23px;

`;
export const HairRight = Styled.div`
    background-color: #663300;
    transform: rotate(352deg);
    width: 5px;
    height: 35px;
    z-index: 70;
    position: fixed;
    margin-left: -95px;
    margin-top: 23px;
`;

export const Head = Styled.div`
    background-color: #ffd9b3;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: fixed;
    margin-top: -10px;
    border-bottom: 25px solid #663300;
    border-top: 10px solid #663300;
    
`;
export const Beard = Styled.div`
    background-color: #663300;
    width: 95px;
    height: 60px;
    position: fixed;
    margin-top: 55px;
    border-radius: 0px 0 400px 400px;
    z-index: 50;
    display: flex;
    justify-content: center;
`;

export const MouthArea = Styled.div`
    position: fixed;
    height: 40px;
    width: 60px;
    background-color: #ffd9b3;
    z-index: 65;
    border-radius: 300px 300px 300px 300px;
    margin-top: -2px;
    border: 7px solid #663300;
    border-bottom: none;
    
`;
