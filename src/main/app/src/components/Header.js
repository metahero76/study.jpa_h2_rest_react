import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled4div = styled.div`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  background: #2B2B2B;
  padding-left: 15px;
  padding-right: 15px;
`;

const Header = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">
                            리스트
                        </Link>
                        <Link to="/joinForm" className="nav-link">
                            회원가입
                        </Link>
                        <Link to="/loginForm" className="nav-link">
                            로그인
                        </Link>
                        <Link to="/saveForm" className="nav-link">
                            글쓰기
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;


