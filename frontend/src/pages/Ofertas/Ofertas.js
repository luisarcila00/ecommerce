import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import img1 from "../Service/netflix.png";
import img2 from "../Service/plex.png";
import img9 from "../Service/disney.png"
import img3 from "../Service/licor.png"
const Ofertas = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "10%" }}>
        Ofertas
      </h1>
      <hr />
      <Container style={{paddingTop: "5%", position:'relative', left:'80px'}}>
        <Row>
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>$15.000</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Recarga suscripción</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>$12.000</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Recarga suscripción</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img9} />
              <Card.Body>
                <Card.Title>$9.000</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Recarga suscripción</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>$155.000</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Recarga suscripción</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Ofertas;
