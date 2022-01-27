import { Col } from "reactstrap";

interface AreaConversaProps {
  conversa_data: {
    id_usuario: string;
    nome: string;
    data: string;
    comentario: string;
  }[];

  usuario_logado_data: {
    id_usuario: string;
    nome: string;
  };
}

export function AreaConversa(props: AreaConversaProps) {
  return (
    <Col md={9} className="bg-light overflow-scroll lista-contatos-conversa d-flex flex-column">
      {props.conversa_data.map((item, index) => (
        <div
          key={index}
          className={`w-100 d-flex justify-content-${(item.nome === props.usuario_logado_data.nome) ? 'end' : 'start'}`}
        >
          <div
            className="mt-2 pb-2 pt-2 ps-3 pe-3 rounded-3 d-flex flex-column"
            style={{
              minWidth: '300px',
              backgroundColor: (item.id_usuario === props.usuario_logado_data.id_usuario) ? 'cadetblue' : 'lightblue'
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
  );
}