import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { Status } from "../../utils/constantes";

export interface ContatoDataTypes {
  id_usuario: string;
  nome: string;
  status: Status;
}

interface ListaContatosProps {
  lista_contatos_data: ContatoDataTypes[]
}

export function ListaContatos(props: ListaContatosProps) {
  const [data, setData] = useState<ContatoDataTypes[]>([]);

  useEffect(() => {
    setData(props.lista_contatos_data);
  }, [props.lista_contatos_data]);

  return (
    <Col md={3} className="bg-light border-end">
      <ListGroup className="overflow-scroll lista-contatos-conversa">
        {data.map((item, index) => (
          <Contato key={index} contato_data={item} />
        ))}
      </ListGroup>
    </Col>
  );
}

interface ContatoProps {
  contato_data: ContatoDataTypes;
}

function Contato(props: ContatoProps) {
  const [statusUsuario, setStatusUsuario] = useState<string>('');

  useEffect(() => {
    let status = props.contato_data.status;
    let validaStatus = (status === Status.ONLINE) ? 'green' :
      (status === Status.OFFLINE) ? 'red' :
        (status === Status.AUSENTE) ? 'yellow' : 'gray';
    setStatusUsuario(validaStatus);
  }, [props.contato_data.status]);

  return (
    <ListGroupItem className="d-flex flex-row justify-content-center align-items-center">
      <BiUserCircle size={30} />
      <h6 className="ms-2 mb-0 w-100">{props.contato_data.nome}</h6>
      <BsCircleFill color={statusUsuario} />
    </ListGroupItem>
  );
}