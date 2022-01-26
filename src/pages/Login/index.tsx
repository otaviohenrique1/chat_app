import { Col, Container, Row, ButtonGroup, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import { Titulo } from "../../components/Titulo";
import * as Yup from "yup";
import { Form, Formik, FormikHelpers } from "formik";
import { Botao, BotaoLink } from "../../components/Botoes";
import { CampoFormulario } from "../../components/Campos";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// const SwalModal = withReactContent(Swal);

interface FormTypes {
  email: string;
  senha: string;
}

const dadosIniciais: FormTypes = {
  email: "",
  senha: ""
};

const schemaValidacao = Yup.object().shape({
  email: Yup.string().required('Campo vazio'),
  senha: Yup.string().required('Campo vazio'),
});

export function Login() {
  let navigate = useNavigate();

  function onSubmit(values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) {
    // const valida_email = values.email === 'usuario@email.com';
    // const valida_senha = values.senha === '0123456789';

    // if (valida_email && valida_senha) {
    //   return SwalModal.fire({
    //     title: <h3>Email ou Senha inválidos</h3>,
    //     buttonsStyling: false,
    //     confirmButtonText: 'Fechar',
    //     customClass: { confirmButton: 'btn btn-primary' },
    //   });
    // } else {
    //   navigate('/home-page');
    //   formikHelpers.resetForm();
    // }
    navigate('/home-page');
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
                <Row>
                  <Col md={12} className="d-flex justify-content-center align-items-center">
                    <Titulo tag="h1">Login</Titulo>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
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
                </Row>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col md={12} className="w-100 d-flex justify-content-end">
                    <ButtonGroup>
                      <Botao color="primary" type="submit">Entrar</Botao>
                      <Botao color="danger" type="reset">Limpar</Botao>
                      <BotaoLink to="/cadastro-usuario" color="success" >Novo usuario</BotaoLink>
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
