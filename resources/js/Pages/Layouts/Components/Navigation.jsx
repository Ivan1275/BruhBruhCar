import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {

  const { auth } = usePage().props;

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="p-3">
      <Container fluid>
        <Navbar.Brand href="/">MoviFP Sostenible</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="mx-2 bi bi-house"> Home</Nav.Link>
            <Nav.Link href="/" className="mx-2 bi bi-search"> Search</Nav.Link>
            <Nav.Link href="/newtravel" className="mx-2 bi bi-car-front"> Publish a ride</Nav.Link>
            {auth.user == null &&
              <>
                <Nav.Link href="/login" className="mx-2 bi bi-door-open"> Log in</Nav.Link>
                <Nav.Link href="/register" className="mx-2 bi bi-check-circle"> Sign up</Nav.Link>
              </>
            }
            {auth.user != null &&
              <NavDropdown
                id="nav-dropdown"
                title={auth.user.name}
                menuVariant="dark"
                align="end"
                className="mx-2"
              >
                <NavDropdown.Item href="#"><i className='bi bi-car-front pe-3'></i>My rides</NavDropdown.Item>
                <NavDropdown.Item href="#"><i className='bi bi-chat pe-3'></i>Messages</NavDropdown.Item>
                <NavDropdown.Item href="#"><i className='bi bi-credit-card pe-3'></i>Payments</NavDropdown.Item>
                <NavDropdown.Item href="#"><i className='bi bi-person-circle pe-3'></i>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href="/logout" method="post" as="NavDropDown.Item">
                    <i className='bi bi-door-closed pe-3'></i>
                    Log out
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}