import React from "react";
import { Form, Button} from "react-bootstrap";


const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "10%" }}>
        Contactános
      </h1>
      <hr />
      <container>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Nombre completo</Form.Label>
    <Form.Control type="text" placeholder="Ingresa tu nombre y apellido" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control type="number" placeholder="Ingresa un número telefónico de contacto" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Correo electrónico</Form.Label>
    <Form.Control type="email" placeholder="nombre@ejemplo.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Mensaje</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje en esta sección"/>
  </Form.Group>
  <Button variant="primary">Enviar</Button>
</Form>
      </container>
    </div>
  );
};
export default Contact;
