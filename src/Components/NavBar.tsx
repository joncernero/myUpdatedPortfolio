import React, { useState } from 'react';
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SideBarData from './SideBarData';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';

type Props = {
  toggleNavBar: Function;
};

const Navbar = (props: Props) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#FFFFFF', size: '25px' }}>
        <NavContainer>
          <NavClose>
            <Link
              to='#'
              onClick={() => {
                props.toggleNavBar();
              }}>
              <AiIcons.AiOutlineClose />
            </Link>
          </NavClose>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <Span
                    onClick={() => {
                      props.toggleNavBar();
                    }}>
                    {item.title}
                  </Span>
                </Link>
              </li>
            );
          })}
        </NavContainer>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

export const NavContainer = Styled.div`
    background-color: #2E9CCA;
    width: 100vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 20px;
    z-index: 125;

    li {
        list-style-type: none;
        margin: 0 0 10px 0;
        
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
        padding: 5px 0 5px 0;
    }

    a:hover {
        color: #464866;
        padding: 5px 0 5px 0;
        font-weight: bold;
    }

`;

export const Span = Styled.span`
  margin-left: 16px;
`;

export const NavClose = Styled.div`
    display: flex;
    justify-content: right;
`;
