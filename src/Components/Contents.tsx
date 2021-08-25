import React from 'react';
import Styled from 'styled-components';
import Home from '../Pages/Home';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import { Route, Switch } from 'react-router-dom';

const Contents = () => {
  return (
    <Container>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/skills&bio' component={Skills}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>
    </Container>
  );
};

export default Contents;

export const Container = Styled.div`
    background-color: #464866;
    height: 80vh;
    width: 100vw;
    display: flex;
`;
