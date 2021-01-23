import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
const Header = ( {isRTLProp} ) => {
    const classNameNav = isRTLProp ? 'mr-auto' : 'ml-auto';
    return (
        <header>
            <Navbar bg="dark" variant = "dark" expand="lg" collapseOnSelect>
                <Container> 
                    <LinkContainer to = '/'>
                        <Navbar.Brand className = 'ml-auto'>{isRTLProp? 'أبو عين تكنولوجيز': 'Abu Ein Technologies'}</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className = {classNameNav}>
                            <LinkContainer to = '/cart'>
                                <Nav.Link ><i className = "fas fa-shopping-cart"></i> {isRTLProp? 'سلة': 'Cart'}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to = '/login'>
                                <Nav.Link> <i className = "fas fa-user"></i> {isRTLProp? 'الدخول': 'Login'}</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </header>
    )
}

export default Header
