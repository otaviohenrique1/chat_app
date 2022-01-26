import { Col, Row } from "reactstrap";
import { HeaderApp } from "../../components/HeaderApp";

export function HomePage() {
  return (
    <div className="h-100">
      <HeaderApp />
      <Row className="h-100 p-0 m-0">
        <Col md={2} className="bg-light border-end">q</Col>
        <Col md={10} className="bg-light">
          <Row>
            <Col md={12}></Col>
            <Col md={12}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}