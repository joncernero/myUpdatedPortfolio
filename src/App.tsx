import React from 'react';
import { Global } from './Styles/GlobalStyles';
import Styled from 'styled-components';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

type Props = {
  toggleNavBar: Function;
};

const App = (props: Props) => {
  return (
    <>
      <Global />
      <Router>
        <Header />
        <Contents />
      </Router>
      <Footer />
    </>
  );
};

export default App;

export const Container = Styled.div`
  margin: 0;
  padding: 0;

`;
