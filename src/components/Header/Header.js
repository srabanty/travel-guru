import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png';
import { UserContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div >
            
                <Navbar expand="lg" className="navigation-bar">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="...."/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="ml-auto">
                            <FormControl type="text" placeholder="Search your destination..." className="mr-sm-2" />
                        </Form>
                        <Nav>
                            <Nav.Link className="white-link" href="#home">News</Nav.Link>
                            <Nav.Link href="#link">Destination</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <button className="main-btn"><a href="/login">Login</a></button>
                            <button className="main-btn logout" onClick={()=> setLoggedInUser({})}>Logout</button>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </div>
    );
};

export default Header;