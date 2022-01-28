import { Card, CardBody, CardFooter, CardHeader, Container, Row } from "reactstrap";
import { HeaderApp } from "../../components/HeaderApp";
import styled from "styled-components";
import { conversa_Lola_Maria, lista_usuarios, usuario_logado } from "../../utils/listas_teste";
import { ContatoDataTypes, ListaContatos } from "../../components/ListaContatos";
import { AreaConversa, ConversaTypes, UsuarioLogadoDataTypes } from "../../components/AreaConversa";
import { FormikHelpers } from "formik";
import { FormularioTypes, Formulario } from "../../components/Formulario";
import { useEffect, useState } from "react";

export function HomePage() {
  const [dataContatos, setDataContatos] = useState<ContatoDataTypes[]>([]);
  const [dataConversa, setDataConversa] = useState<ConversaTypes[]>([]);
  const [dataUsuarioLogado, setDataUsuarioLogado] = useState<UsuarioLogadoDataTypes>({ id_usuario: '', nome: '' });

  useEffect(() => {
    setDataUsuarioLogado(usuario_logado);
  }, []);

  useEffect(() => {
    setDataContatos(lista_usuarios);
  }, []);

  useEffect(() => {
    setDataConversa(conversa_Lola_Maria);
  }, []);

  function addConversa(values: FormularioTypes, formikHelpers: FormikHelpers<FormularioTypes>) {
    console.log(values.mensagem);
    formikHelpers.resetForm();
  }

  // function addContato() {
    
  // }

  return (
    <Container className="h-100 w-100 d-flex justify-content-center align-items-center">
      <CardEstilizado>
        <CardHeader className="p-0">
          <HeaderApp data_usuario_logado={dataUsuarioLogado} />
        </CardHeader>
        <CardBody className="p-0">
          <Row className="p-0 m-0 h-100">
            <ListaContatos
              lista_contatos_data={dataContatos}
            />
            <AreaConversa
              conversa_data={dataConversa}
              usuario_logado_data={dataUsuarioLogado}
            />
          </Row>
        </CardBody>
        <CardFooter>
          <Formulario onSubmit={addConversa} />
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
