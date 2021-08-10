import styled from "styled-components";
import logo from "../../assets/logo.png";
import reverselogo from "../../assets/reverse_logo.png";
import Toggle from "../Toggler";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  padding: 13px;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #e2e8f0;
  margin-bottom: 5px;
  line-height: 2px;
  align-items: center;
  height: 15vh;
`;
const NavLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const NavRight = styled.div`
height:50px
width:100px
display: flex; 

`;

const MenuButton = styled.button`
  background: ${(props) => (props.theme === "light" ? "#f4deb8" : "#117576")};
  color: ${(props) => (props.theme === "light" ? "#5a2f2f" : "wheat")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (max-width: 640px) {
    margin: 0.2em;
  }
`;

const Navbar = ({ theme, themeToggler }) => {
  return (
    <Nav>
      <NavLeft>
        {theme === "light" ? (
          <Link to="/">
            <img
              src={reverselogo}
              height="50px"
              width="50px"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src={logo}
              height="50px"
              width="50px"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
          </Link>
        )}
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </NavLeft>
      <NavRight>
        <Link to="/">
          <MenuButton theme={theme}>Home</MenuButton>
        </Link>

        <Link to="/about">
          <MenuButton theme={theme}>About</MenuButton>
        </Link>

        <Link to="/blog">
          <MenuButton theme={theme}>Blog</MenuButton>
        </Link>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
