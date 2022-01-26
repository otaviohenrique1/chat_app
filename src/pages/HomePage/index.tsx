import { Card, CardBody, CardFooter, CardHeader, Col, Container, Input, InputGroup, ListGroup, ListGroupItem, Row } from "reactstrap";
import { HeaderApp } from "../../components/HeaderApp";
import { Botao } from "../../components/Botoes";
import styled from "styled-components";
import { AiOutlineSend, AiOutlineUser, AiOutlineUserDelete, AiOutlineUserAdd, AiOutlineUserSwitch } from "react-icons/ai";
import { BiUserCheck, BiUserMinus, BiUserPlus, BiUserVoice, BiUserX, BiUser } from "react-icons/bi";
import { FiUserCheck, FiUserMinus, FiUserPlus, FiUserX, FiUser, FiUsers } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";

const usuario_logado = {
  id_usuario: '10',
  nome: 'Lola',
  avatar: <AiOutlineUserAdd size={20} />,
};

export function HomePage() {
  return (
    <Container className="h-100 w-100 d-flex justify-content-center align-items-center">
      <CardEstilizado>
        <CardHeader className="p-0">
          <HeaderApp />
        </CardHeader>
        <CardBody className="p-0">
          <Row className="p-0 m-0 h-100">
            <Col md={3} className="bg-light border-end">
              <ListGroup className="overflow-scroll lista-contatos-conversa">
                {lista_usuarios.map((item, index) => (
                  <ListGroupItem className="d-flex flex-row justify-content-center align-items-center" key={index}>
                    {item.avatar}
                    <h6 className="ms-2 mb-0 w-100">{item.nome}</h6>
                    <BsCircleFill
                      color={
                        (item.status === 'online') ? 'green' :
                          (item.status === 'offline') ? 'red' :
                            (item.status === 'ausente') ? 'yellow' : undefined
                      }
                    />
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col md={9} className="bg-light overflow-scroll lista-contatos-conversa d-flex flex-column">
              {/* {conversa_Lola_Maria.map((item, index) => ())} */}
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <InputGroup>
            <Input type="textarea" />
            <Botao color="primary" type="button" className=" d-flex justify-content-center align-items-center">
              <AiOutlineSend size={20} />
            </Botao>
          </InputGroup>
        </CardFooter>
      </CardEstilizado>
    </Container>
  );
}

const CardEstilizado = styled(Card)`
  /* height: 95%; */
  height: 600px !important;
  width: 100%;

  .lista-contatos-conversa {
    height: 450px !important;
  }
`;

const lista_usuarios = [
  { id_usuario: '09', avatar: <AiOutlineUser size={20} />, nome: 'Juca', status: 'online' },
  { id_usuario: '10', avatar: <AiOutlineUserAdd size={20} />, nome: 'Lola', status: 'online' },
  { id_usuario: '12', avatar: <AiOutlineUserDelete size={20} />, nome: 'Jeca', status: 'online' },
  { id_usuario: '15', avatar: <AiOutlineUserSwitch size={20} />, nome: 'Maria', status: 'online' },
  { id_usuario: '66', avatar: <BiUserCheck size={20} />, nome: 'Ana', status: 'online' },
  { id_usuario: '88', avatar: <BiUserMinus size={20} />, nome: 'Sara', status: 'online' },
  { id_usuario: '11', avatar: <BiUserPlus size={20} />, nome: 'Jana', status: 'ausente' },
  { id_usuario: '19', avatar: <BiUserVoice size={20} />, nome: 'Jaca', status: 'ausente' },
  { id_usuario: '05', avatar: <BiUserX size={20} />, nome: 'Mara', status: 'ausente' },
  { id_usuario: '02', avatar: <BiUser size={20} />, nome: 'Lana', status: 'ausente' },
  { id_usuario: '45', avatar: <FiUserCheck size={20} />, nome: 'Helena', status: 'ausente' },
  { id_usuario: '31', avatar: <FiUserMinus size={20} />, nome: 'Julia', status: 'offline' },
  { id_usuario: '85', avatar: <FiUserPlus size={20} />, nome: 'Luana', status: 'offline' },
  { id_usuario: '79', avatar: <FiUserX size={20} />, nome: 'Gabriela', status: 'offline' },
  { id_usuario: '62', avatar: <FiUser size={20} />, nome: 'Maisa', status: 'offline' },
  { id_usuario: '28', avatar: <FiUsers size={20} />, nome: 'Marina', status: 'offline' },
];

const conversa_Lola_Maria = [
  {
    id_usuario: '10',
    nome: 'Lola',
    data: '26/01/2022 - 15:00',
    comentario: 'Ola, tudo bem com voce',
  },
  {
    id_usuario: '15',
    nome: 'Maria',
    data: '26/01/2022 - 15:00',
    comentario: 'Tudo e com voce?',
  },
];
