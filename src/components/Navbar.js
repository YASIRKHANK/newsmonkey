
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar className="navbar-expand-lg navbar-dark bg-dark">
      <Container fluid>
        <Link to="/" className="navbar-brand">News-Monkey</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/business" className="nav-link">Business</Link>
            <Link to="/entertainment" className="nav-link">Entertainment</Link>
            <Link to="/general" className="nav-link">General</Link>
            <Link to="/health" className="nav-link">Health</Link>
            <Link to="/science" className="nav-link">Science</Link>
            <Link to="/sports" className="nav-link">Sports</Link>
            <Link to="/technology" className="nav-link">Technology</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
