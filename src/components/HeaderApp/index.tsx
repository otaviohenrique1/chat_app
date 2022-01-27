import { Nav, Navbar, NavItem, Collapse, DropdownItem, DropdownMenu, DropdownToggle, NavbarBrand, NavbarToggler, Dropdown } from "reactstrap";
import { BiUserCircle } from "react-icons/bi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoDataTypes } from "../AreaConversa";

interface HeaderAppProps {
  data_usuario_logado: UsuarioLogadoDataTypes;
}

export function HeaderApp(props: HeaderAppProps) {
  const [data, setData] = useState<UsuarioLogadoDataTypes>({ id_usuario: '', nome: '' });

  useEffect(() => {
    setData(props.data_usuario_logado);
  }, [props.data_usuario_logado]);

  const [aberto, setAberto] = useState<boolean>(false);
  const toggle = () => {
    setAberto(!aberto)
  };

  const [dropdownAberto, setDropdownAberto] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdownAberto(!dropdownAberto)
  };

  return (
    <Navbar color="dark" dark expand="sm" light className="rounded-top">
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
            <DropdownToggle caret className="d-flex flex-row justify-content-center align-items-center">
              <h6 className="m-0">{(data.nome) ? data.nome : '[Nome do usuario]'}</h6>
              <BiUserCircle size={30} className="ms-2" />
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