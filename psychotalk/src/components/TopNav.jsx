import React, {useState} from 'react';
import { Container, Navbar, Nav, NavLink, NavDropdown, Button, Modal, Form } from 'react-bootstrap';
import logo from '../assests/logo1.png'
const TopNav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const menuData = [
        {
            path:'/',
            name:"Free Kundli"
        },
        {
            path:'/',
            name:"Kundli Matching"
        },
        {
            path:'/',
            name: "Horoscopes",  
            submenu: [
                {path: '/Horoscope', name: "Horoscope 2024"},
                { path: '/daily', name: "Daily Horoscope" },
                { path: '/weekly', name: "Weekly Horoscope" },
                { path: '/monthly', name: "Monthly Horoscope" },
                { path: '/yearly', name: "Yearly Horoscope" },
                { path: '/tomorrow', name: "Tomorrow's Horoscope"},
                { path: '/yesterday', name: "Yesterday's Horoscope"},
                { path: '/chinese', name: "Chinese Horoscope"}
            ]
        },
        {
            path:'/',
            name:"Chat with Astrologer"
        },
        {
            path:'/',
            name:"Talk to Astrologer"
        },
        {
            path:'/',
            name:"Book a Pooja"
        },
        {
            path:'/',
            name:"Astromail"
        },
        {
            path:'/',
            name:"Astrotalk Store"
        },
        {
            path:'/',
            name:"Blog"
        },
    
    ]
    return (
        <>
      <Navbar className="navbar" expand="lg" >
      <Container>
      <img 
                        src={logo} 
                        alt="Psychotalk Logo" 
                        style={{ width: '30px', marginRight: '10px' }}
                    />
        <Navbar.Brand href="#home" className="brand"><b>Psychotalk</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
                        {
                            menuData.map((item, index) => {
                                if (item.submenu) {
                                    return (
                                        <NavDropdown title={item.name} key={index} id={`${item.name.toLowerCase()}-dropdown`} className="list_item">
                                            {item.submenu.map((subItem) => (
                                                <NavDropdown.Item href={subItem.path} key={subItem.name}>
                                                    {subItem.name}
                                                </NavDropdown.Item>
                                            ))}
                                        </NavDropdown>
                                    );
                                }
                                return (
                                    <NavLink to={item.path} key={index}>
                                        <div className="list_item">{item.name}</div>
                                    </NavLink>
                                );
                            })
                        }
                    </Nav>
          <Nav className='ms-auto'>
            <button className="btn btn-success" onClick={handleShow}>Sign Up</button>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </>

    );
};
export default TopNav;