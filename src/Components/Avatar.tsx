import React from 'react';
import Styled from 'styled-components';

const Me = () => {
  return (
    <Avatar>
      <Hair></Hair>
      <LeftEar></LeftEar>
      <RightEar></RightEar>
      <Head>
        <LeftEyeBrow />
        <RightEyeBrow />
        <Blink>
          <LeftEye>
            <LeftInnerEye>
              <LeftPupil />
            </LeftInnerEye>
          </LeftEye>
          <RightEye>
            <RightInnerEye>
              <RightPupil />
            </RightInnerEye>
          </RightEye>
        </Blink>
      </Head>
      <Beard>
        <MouthArea></MouthArea>
      </Beard>
    </Avatar>
  );
};

export default Me;

export const Avatar = Styled.div`
    display: flex;
    justify-content: center;
    margin-left: 80px;

`;

export const Hair = Styled.div`
    background-color: #663300;
    position: fixed;
     -webkit-clip-path: polygon(82% 1%, 80% 17%, 99% 13%, 95% 35%, 86% 94%, 82% 32%, 15% 38%, 14% 95%, 3% 29%, 38% 5%);
    clip-path: polygon(82% 1%, 80% 17%, 99% 13%, 95% 35%, 86% 94%, 82% 32%, 15% 38%, 14% 90%, 3% 29%, 38% 5%);
    z-index: 77;
    width: 125px;
    height: 90px;
    margin-top: -19px;
    
`;

export const LeftEar = Styled.div`
    background-color: #ffd9b3;
   -webkit-clip-path: ellipse(25% 40%);
   clip-path: ellipse(25% 40%); 
    position: fixed;
    margin-right: -100px;
    margin-top: 35px;
    z-index: 45;
    width: 20px;
    height: 35px;

`;

export const RightEar = Styled.div`
    background-color: #ffd9b3;
    -webkit-clip-path: ellipse(25% 40%);
   clip-path: ellipse(25% 40%); 
    position: fixed;
    margin-left: -100px;
    margin-top: 35px;
    z-index: 45;
    width: 20px;
    height: 35px;
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
    display: flex;
    justify-content: center;
    
`;

export const Beard = Styled.div`
    background-color: #663300;
    width: 94px;
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

export const LeftEyeBrow = Styled.div`
    position: fixed; 
    -webkit-clip-path: polygon(51% 19%, 94% 19%, 91% 34%, 51% 31%, 0 39%, 0 33%);
    clip-path: polygon(51% 19%, 94% 19%, 91% 34%, 51% 31%, 0 39%, 0 33%);
    width: 30px;
    height: 25px; 
    background-color: #663300;
    z-index: 80;
    margin-top: 23px;
    margin-left: -40px;
`;

export const RightEyeBrow = Styled.div`
    position: fixed; 
    -webkit-clip-path: polygon(0 33%, 0 39%, 51% 31%, 91% 34%, 94% 19%, 51% 19%);
    clip-path: polygon(0 33%, 0 39%, 51% 31%, 91% 34%, 94% 19%, 51% 19%);
    width: 30px;
    height: 25px; 
    background-color: #663300;
    z-index: 80;
    margin-top: 22px;
    margin-right: -40px;
    transform: rotateY(180deg)
`;

export const Blink = Styled.div`
display: flex;
justify-content: center;

animation: blink 2.4s infinite;

@keyframes blink {
    90% {
        transform: none;
        animation-timing-function: ease-in;
    }
    93% {
        transform: translateY(15px) scaleY(0)
    }
    100% {
        animation-timing-function: ease-out;
    }
}
`;

export const LeftEye = Styled.div`
    background-color: #FFFFFF;
    width: 30px;
    height: 45px;
    -webkit-clip-path: ellipse(38% 15%);
    clip-path: ellipse(38% 15%);
    z-index: 70;
    position: fixed;
    margin: 17px 0 0 -40px;
    display: flex;
    justify-content: center;
   
`;

export const RightEye = Styled.div`
    background-color: #FFFFFF;
    width: 30px;
    height: 45px;
    -webkit-clip-path: ellipse(38% 15%);
    clip-path: ellipse(38% 15%);
    z-index: 70;
    position: fixed;
    margin: 17px -40px 0 0;
    display: flex;
    justify-content: center;
   
`;

export const LeftInnerEye = Styled.div`
    background-color: #009933;
    width: 30px;
    height: 45px;
    -webkit-clip-path: circle(16%);
    clip-path: circle(16%);
    z-index: 75;
    position: fixed;
    display: flex;
    justify-content: center;
    `;

export const RightInnerEye = Styled.div`
    background-color: #009933;
    width: 30px;
    height: 45px;
    -webkit-clip-path: circle(16%);
    clip-path: circle(16%);
    z-index: 75;
    position: fixed;
    display: flex;
    justify-content: center;
    
`;

export const LeftPupil = Styled.div`
    position: fixed;
    background-color: #000000;
    -webkit-clip-path: circle(10%);
    clip-path: circle(10%);
    z-index: 100;
    width: 20px;
    height: 35px; 
    margin-top: 5px;
`;

export const RightPupil = Styled.div`
    position: fixed;
    background-color: #000000;
    -webkit-clip-path: circle(10%);
    clip-path: circle(10%);
    z-index: 100;
    width: 20px;
    height: 35px; 
    margin-top: 5px;
`;
