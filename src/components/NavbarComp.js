import React, { Component } from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

export class NavbarComp extends Component {
    render() {
        return (
            

                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand className="navbar-brand font-weight-bold" href="#"><img src="images/logo.jpg" alt=""/> SHOP</Navbar.Brand>
                    <Nav className="me-auto navbar-nav mr-auto px-5 ml-5">
                    <Nav.Link className="ml-3" href="/">HOME</Nav.Link>
                    <Nav.Link className="ml-3" href="/features">SHOP</Nav.Link>
                    <Nav.Link className="ml-3" href="#pricing">PICNIC</Nav.Link>
                    <Nav.Link className="ml-3" href="#pricing">PAGE</Nav.Link>
                    <Nav.Link className="ml-3" href="/hotdeals">PROMOTION</Nav.Link>
                    <Nav.Link className="ml-3" href="#pricing">BLOG</Nav.Link>
                    <Nav.Link className="ml-3" href="/contact">CONTACT US</Nav.Link>
                
                    </Nav>
                    <div className=" my-2 my-lg-0">
                                    <i className="fas fa-search text-secondary mr-3"></i>
                                    <i className="fas fa-shopping-cart text-secondary mr-3"></i>
                                    <i className="fas fa-bars text-secondary mr-3"></i>
                                    
                    </div>
                    </Container>
                </Navbar>
                
            
        )
    }
}

export default NavbarComp
