import { BiUserCircle } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { Status } from "../../utils/constantes";

interface ListaContatosProps {
  lista_contatos_data: ContatoProps[]
}

export function ListaContatos(props: ListaContatosProps) {
  return (
    <Col md={3} className="bg-light border-end">
      <ListGroup className="overflow-scroll lista-contatos-conversa">
        {props.lista_contatos_data.map((item, index) => (
          <Contato key={index} id_usuario={item.id_usuario} nome={item.nome} status={item.status} />
        ))}
      </ListGroup>
    </Col>
  );
}

interface ContatoProps {
  id_usuario: string;
  nome: string;
  status: Status;
}

function Contato(props: ContatoProps) {
  return (
    <ListGroupItem className="d-flex flex-row justify-content-center align-items-center">
      <BiUserCircle size={30} />
      <h6 className="ms-2 mb-0 w-100">{props.nome}</h6>
      <BsCircleFill
        color={
          (props.status === 'online') ? 'green' :
            (props.status === 'offline') ? 'red' :
              (props.status === 'ausente') ? 'yellow' : undefined
        }
      />
    </ListGroupItem>
  );
}