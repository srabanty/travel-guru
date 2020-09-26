import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './NewHeader.css';
import logo from '../../images/logo.png';
import { UserContext } from '../../App';



const NewHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.name);
    
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
                            <Nav.Link href="#home">News</Nav.Link>
                            <Nav.Link href="#link">Destination</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <button className="main-btn">Login</button>
                            <button className="main-btn logout" onClick={()=> setLoggedInUser({})}>Logout</button>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </div>
    );
};

export default NewHeader;