import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom';
import { Global } from './Styles/GlobalStyles';
import Styled from 'styled-components';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Global />
      <Contents />
      <Footer />
    </>
  );
};

export default App;

export const Container = Styled.div`
  margin: 0;
  padding: 0;

`;
