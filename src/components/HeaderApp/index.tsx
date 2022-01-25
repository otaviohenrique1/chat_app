import { Nav, Navbar, NavItem, NavLink, Collapse, DropdownItem, DropdownMenu, DropdownToggle, NavbarBrand, NavbarToggler, UncontrolledDropdown } from "reactstrap";
import { BiUserCircle } from "react-icons/bi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { useState } from "react";

export function HeaderApp() {
  const [aberto, setAberto] = useState<boolean>(false);
  const toggle = () => {
    setAberto(!aberto)
  };

  return (
    <Navbar color="dark" dark expand="sm" light>
      <NavbarBrand href="/">
        <BsFillChatLeftTextFill size={30} />
        <span className="fw-bold ms-2">Chat App</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={aberto}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">
              Components
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <BiUserCircle size={30} />
            </DropdownToggle>
            <DropdownMenu right>
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
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}