import { Card, CardBody, CardFooter, CardHeader, Col, Container, Input, InputGroup, ListGroup, ListGroupItem, Row } from "reactstrap";
import { HeaderApp } from "../../components/HeaderApp";
import { Botao } from "../../components/Botoes";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { conversa_Lola_Maria, lista_usuarios, usuario_logado } from "../../utils/listas_teste";

export function HomePage() {
  return (
    <Container className="h-100 w-100 d-flex justify-content-center align-items-center">
      <CardEstilizado>
        <CardHeader className="p-0">
          <HeaderApp nome={usuario_logado.nome} />
        </CardHeader>
        <CardBody className="p-0">
          <Row className="p-0 m-0 h-100">
            <Col md={3} className="bg-light border-end">
              <ListGroup className="overflow-scroll lista-contatos-conversa">
                {lista_usuarios.map((item, index) => (
                  <ListGroupItem className="d-flex flex-row justify-content-center align-items-center" key={index}>
                    <BiUserCircle size={30} />
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
              {conversa_Lola_Maria.map((item, index) => (
                <div
                  key={index}
                  className={`w-100 d-flex justify-content-${(item.nome === usuario_logado.nome) ? 'end' : 'start'}`}
                >
                  <div
                    className="mt-2 pb-2 pt-2 ps-3 pe-3 rounded-3 d-flex flex-column"
                    style={{
                      minWidth: '300px',
                      backgroundColor: (item.nome === usuario_logado.nome) ? 'cadetblue' : 'lightblue'
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center flex-row border-bottom border-dark pb-1">
                      <h6 className="fw-bold">{item.nome}</h6>
                      <h6>{item.data}</h6>
                    </div>
                    <h6 className="mt-2">{item.comentario}</h6>
                  </div>
                </div>
              ))}
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
