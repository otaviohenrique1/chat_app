import { Col, Container, Row, ButtonGroup, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import { Titulo } from "../../components/Titulo";
import * as Yup from "yup";
import { Form, Formik, FormikHelpers } from "formik";
import { Botao, BotaoLink } from "../../components/Botoes";
import { CampoFormulario } from "../../components/Campos";
import { useNavigate } from "react-router-dom";

interface FormTypes {
  nome: string;
  email: string;
  senha: string;
  senha2: string;
}

const dadosIniciais: FormTypes = {
  nome: "",
  email: "",
  senha: "",
  senha2: "",
};

const schemaValidacao = Yup.object().shape({
  nome: Yup.string().required('Campo vazio'),
  email: Yup.string().required('Campo vazio'),
  senha: Yup.string().required('Campo vazio'),
  senha2: Yup.string().required('Campo vazio'),
});

export function CadastroUsuario() {
  let navigate = useNavigate();

  function onSubmit(values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) {
    navigate('/home-page');
    formikHelpers.resetForm();
  }

  return (
    <Container className="d-flex justify-content-center align-content-center m-5">
      <Formik
        initialValues={dadosIniciais}
        onSubmit={onSubmit}
        validationSchema={schemaValidacao}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Card>
              <CardHeader>
                <Row >
                  <Col md={12} className="d-flex justify-content-center align-items-center">
                    <Titulo tag="h1">Novo usuário</Titulo>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={12} className="mb-3">
                    <CampoFormulario
                      type="text"
                      id="nome"
                      name="nome"
                      value={values.nome}
                      htmlFor="nome"
                      label="Nome"
                      placeholder="Digite o seu nome"
                      errors={errors.nome}
                      touched={touched.nome}
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <CampoFormulario
                      type="text"
                      id="email"
                      name="email"
                      value={values.email}
                      htmlFor="email"
                      label="E-mail"
                      placeholder="Digite o seu e-mail"
                      errors={errors.email}
                      touched={touched.email}
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <CampoFormulario
                      type="password"
                      id="senha"
                      name="senha"
                      value={values.senha}
                      htmlFor="senha"
                      label="Senha"
                      placeholder="Digite a sua senha"
                      errors={errors.senha}
                      touched={touched.senha}
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <CampoFormulario
                      type="password"
                      id="senha2"
                      name="senha2"
                      value={values.senha2}
                      htmlFor="senha2"
                      label="Repetir a senha"
                      placeholder="Confirme a sua senha"
                      errors={errors.senha2}
                      touched={touched.senha2}
                    />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col md={12} className="w-100 d-flex justify-content-end">
                    <ButtonGroup>
                      <Botao color="primary" type="submit">Cadastrar</Botao>
                      <Botao color="danger" type="reset">Limpar</Botao>
                      <BotaoLink to="/" color="success" >Voltar</BotaoLink>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
