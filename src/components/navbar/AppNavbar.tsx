import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear, faBars, faBook, faCoins, faBox, faDiagramProject } from '@fortawesome/free-solid-svg-icons';

const AppNavbar: React.FC = () => {
    return (
        <>
            <Navbar expand="lg" fixed="top" variant="dark" bg="primary" className="border" collapseOnSelect >
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand><span className="fw-bold">Pat 4 Calculator</span></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle>
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas  >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Menu
                        </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <LinkContainer to="/">
                                    <Nav.Link><FontAwesomeIcon icon={faHouse} /><span className="ms-2">Home</span></Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/finances">
                                    <Nav.Link><FontAwesomeIcon icon={faCoins} /><span className="ms-2">Finances</span></Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/logistics">
                                    <Nav.Link><FontAwesomeIcon icon={faBox} /><span className="ms-2">Logistics</span></Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/ledger">
                                    <Nav.Link><FontAwesomeIcon icon={faBook} /><span className="ms-2">Ledger</span></Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/recipes">
                                    <Nav.Link><FontAwesomeIcon icon={faDiagramProject} /><span className="ms-2">Recipes</span></Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/setting">
                                    <Nav.Link><FontAwesomeIcon icon={faGear} /><span className="ms-2">World Settings</span></Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>);
}

export default AppNavbar;
