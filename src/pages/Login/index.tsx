import { Col, Container, Row } from "reactstrap";
import { Titulo } from "../../components/Titulo";

export function Login() {
  return (
    <Container className="d-flex justify-content-center align-content-center m-5">
      <Row>
        <Col md={12}>
          <Titulo tag="h1">Login</Titulo>
        </Col>
        <Col md={12}>
          Formulario
        </Col>
      </Row>
    </Container>
  );
}