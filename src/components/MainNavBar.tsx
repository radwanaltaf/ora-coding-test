import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/ova-logo.svg';

function MainNavBar() {
    return (
        <Navbar style={{ backgroundColor: '#EEEEEE' }} collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold me-5 display-1' href="#home">
                    <Image src={logo} width="75" height="75" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className='me-4' title="Control" id="collasible-nav-dropdown-control">
                            <NavDropdown.Item href="#action/1.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='me-4' title="Treat" id="collasible-nav-dropdown-treat">
                            <NavDropdown.Item href="#action/2.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='me-4' title="Consult" id="collasible-nav-dropdown-consult">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Learn" id="collasible-nav-dropdown-learn">
                            <NavDropdown.Item href="#action/4.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            <span className="display-6 material-symbols-outlined">
                                shopping_bag
                            </span>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <span className="display-6 material-symbols-outlined">
                                person
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;