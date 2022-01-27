import { Card, CardBody, CardFooter, CardHeader, Container, Row } from "reactstrap";
import { HeaderApp } from "../../components/HeaderApp";
import styled from "styled-components";
import { conversa_Lola_Maria, lista_usuarios, usuario_logado } from "../../utils/listas_teste";
import { ListaContatos } from "../../components/ListaContatos";
import { AreaConversa } from "../../components/AreaConversa";
import { FormikHelpers } from "formik";
import { FormTypes, Formulario } from "../../components/Formulario";

export function HomePage() {
  function onSubmit(values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) {
    console.log(values.mensagem);
    formikHelpers.resetForm();
  }

  return (
    <Container className="h-100 w-100 d-flex justify-content-center align-items-center">
      <CardEstilizado>
        <CardHeader className="p-0">
          <HeaderApp nome={usuario_logado.nome} />
        </CardHeader>
        <CardBody className="p-0">
          <Row className="p-0 m-0 h-100">
            <ListaContatos
              lista_contatos_data={lista_usuarios}
            />
            <AreaConversa
              conversa_data={conversa_Lola_Maria}
              usuario_logado_data={usuario_logado}
            />
          </Row>
        </CardBody>
        <CardFooter>
          <Formulario onSubmit={onSubmit} />
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
