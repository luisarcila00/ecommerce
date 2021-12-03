import React from "react";
import { Form, Button} from "react-bootstrap";


const Contact = () => {
  return (
    <div className="container">
      <br/>
      <h1 className="text-center">
        Contáctanos
      </h1>
      <hr/>
      <br/>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Nombre completo</Form.Label>
    <Form.Control type="text" placeholder="Ingresa tu nombre" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control type="number" placeholder="Ingresa tu numéro de teléfono" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Correo electrónico</Form.Label>
    <Form.Control type="email" placeholder="nombre@ejemplo.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Mensaje</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Escríbenos tus inquietudes"/>
  </Form.Group>
  <Button variant="primary">Enviar</Button>
</Form>

    </div>
  );
};
export default Contact;
