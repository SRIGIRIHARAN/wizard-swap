import React from 'react'
import './NavBar.css'
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="set-nav">
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='col-4'><Image src={'assets/logo.png'} fluid></Image></Navbar.Brand>
                <Navbar.Collapse className='col-4' id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Trade</Nav.Link>
                        <Nav.Link href="#link">Earn</Nav.Link>
                        <Nav.Link href="#about">Game</Nav.Link>
                        <Nav.Link href="#about">Nft</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div className="profile col-3">
                    <div className="profile-image">
                        <i class="bi bi-person-circle"></i>
                    </div>
                    <div className='wallet-toggle'>
                        <p>BSC</p>
                        <Button variant='light'> Connect to Wallet</Button>
                    </div>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <i className="bi bi-filter-right"></i>
                </Navbar.Toggle>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar