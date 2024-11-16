import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import Logo from "../../imgs/logo-transbarent-background.png";
import login from "../../imgs/login.jpg";
import cart from "../../imgs/cart.png"


function NaveBarLogin() {
  return (
    <div>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img src={Logo} alt="logo-imge" className="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              type="search"
              placeholder="ابحث..."
              className="me-2 w-100 text-center"
              aria-label="Search"
            />
            <Nav className="me-auto">
              
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
              
              <Nav.Link
                href="/cart"
                className="nav-text position-relative d-flex mt-3 justify-content-center"
                style={{ color: "white" }}
              >
                <img src={cart} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>العربه</p>
                <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                  {3}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NaveBarLogin;
