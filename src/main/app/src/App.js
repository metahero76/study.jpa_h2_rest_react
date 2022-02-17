import React from 'react';
import { Container } from 'react-bootstrap';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Detail from './pages/msg/Detail';
import Home from './pages/msg/Home';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import SaveForm from './pages/msg/SaveForm';
import UpdateForm from './pages/msg/UpdateForm';
import styled from 'styled-components';

const Styled4div = styled.div`
  font-size: 1em;
  color: #74A2BA;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #333333;
`;

function App() {
  return (
    <Styled4div>
      <Header/>
      <br/>
      <Container>
          <Routes>
            <Route path="/" exact={true} element={<Home />}/> 
            <Route path="/joinForm" exact={true} element={<JoinForm />}/> 
            <Route path="/loginForm" exact={true} element={<LoginForm />}/> 
            <Route path="/saveForm" exact={true} element={<SaveForm />}/> 
            <Route path="/msg/:id" exact={true} element={<Detail />}/>
            <Route path="/updateForm/:id" exact={true} element={<UpdateForm />}/> 
          </Routes>
      </Container>
    </Styled4div>
  );
}

export default App;
