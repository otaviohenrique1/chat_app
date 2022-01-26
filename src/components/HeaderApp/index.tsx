import { Nav, Navbar, NavItem, Collapse, DropdownItem, DropdownMenu, DropdownToggle, NavbarBrand, NavbarToggler, Dropdown } from "reactstrap";
import { BiUserCircle } from "react-icons/bi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

export function HeaderApp() {
  const [aberto, setAberto] = useState<boolean>(false);
  const toggle = () => {
    setAberto(!aberto)
  };

  const [dropdownAberto, setDropdownAberto] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdownAberto(!dropdownAberto)
  };

  return (
    <Navbar color="dark" dark expand="sm" light>
      <NavbarBrand>
        <BsFillChatLeftTextFill size={30} />
        <span className="fw-bold ms-2">Chat App</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={aberto}>
        <Nav className="me-auto d-flex justify-content-between w-100" navbar>
          <NavItem>
            <Link to="/home-page" className="nav-link">
              Inicio
            </Link>
          </NavItem>
          <Dropdown toggle={toggleDropdown} isOpen={dropdownAberto}>
            <DropdownToggle caret>
              <BiUserCircle size={30} />
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem>
                Contatos
              </DropdownItem>
              <DropdownItem>
                Perfil
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Sair
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}