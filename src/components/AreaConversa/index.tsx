import { useEffect, useState } from "react";
import { Col } from "reactstrap";
import styled from "styled-components";

export interface ConversaTypes {
  id_usuario: string;
  nome: string;
  data: string;
  comentario: string;
}

export interface UsuarioLogadoDataTypes {
  id_usuario: string;
  nome: string;
}

interface AreaConversaProps {
  conversa_data: ConversaTypes[];
  usuario_logado_data: UsuarioLogadoDataTypes;
}

export function AreaConversa(props: AreaConversaProps) {
  const [data, setData] = useState<ConversaTypes[]>([]);

  useEffect(() => {
    setData(props.conversa_data);
  }, [props.conversa_data]);

  return (
    <Col md={9} className="bg-light overflow-scroll lista-contatos-conversa d-flex flex-column">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-100 d-flex justify-content-${(item.nome === props.usuario_logado_data.nome) ? 'end' : 'start'}`}
        >
          <Comentario
            className="mt-2 pb-2 pt-2 ps-3 pe-3 rounded-3 d-flex flex-column"
            style={{
              backgroundColor: (item.id_usuario === props.usuario_logado_data.id_usuario) ? 'cadetblue' : 'lightblue'
            }}
          >
            <div className="d-flex justify-content-between align-items-center flex-row border-bottom border-dark pb-1">
              <h6 className="fw-bold">{item.nome}</h6>
              <h6>{item.data}</h6>
            </div>
            <h6 className="mt-2">{item.comentario}</h6>
          </Comentario>
        </div>
      ))}
    </Col>
  );
}

const Comentario = styled.div`
  min-width: 300px;
`;