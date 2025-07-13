import { Container, Row, Col, Image } from "react-bootstrap";
import "/Gemini_Generated_Image_unh28nunh28nunh2.png"

function MainBootstrap() {
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col xs={12} md={4} lg={4}>
          <Image
            src="/Gemini_Generated_Image_unh28nunh28nunh2.png"
            alt="/Gemini_Generated_Image_unh28nunh28nunh2.png"
            fluid
            rounded
          />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <h1>Bienvenidos a "Mi Tienda"</h1>
          <h3>
            Todo lo que quieras buscar
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;
