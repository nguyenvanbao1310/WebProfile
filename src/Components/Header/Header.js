import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const handleGithubClick = () => {
    window.location.href = "https://github.com/nguyenvanbao1310";
  };
  const handleFacebookClick = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100024223324465";
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Web-Profile
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="Exercise" className="nav-link">
              Exercise
            </NavLink>
            <div className="dropdown">
              <button className="dropbtn">
                <span className="dropdown-text">Contact</span>
                <i className="fa-solid fa-chevron-down dropdown-icon"></i>
              </button>
              <ul className="dropdown-content">
                <li className="option">
                  <i
                    className="fa-brands fa-github option-icon"
                    style={{ color: "#171515" }}
                  ></i>
                  <span
                    className="option-text"
                    onClick={() => handleGithubClick()}
                  >
                    Github
                  </span>
                </li>
                <li className="option">
                  <i
                    className="fa-brands fa-facebook-f option-icon"
                    style={{ color: "#4267b2" }} // Màu sắc của Facebook
                  ></i>
                  <span
                    className="option-text"
                    onClick={() => handleFacebookClick()}
                  >
                    Facebook
                  </span>
                </li>
                <li className="option">
                  <i
                    className="fa-brands fa-google option-icon"
                    style={{ color: "#ea4335" }} // Màu sắc của Gmail
                  ></i>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
