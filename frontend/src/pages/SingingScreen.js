import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

const SingingScreen = () => {
  return (
    <div className="container">
      <Form className="text-center" style={{paddingTop: "30%"}}>
        <Form.Group>
          <h3>¡Hola! Ingresa tu e‑mail o usuario</h3>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email o Usuario</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email o Usuario" />
          <Form.Text className="text-muted">
            Nosotros nunca compartiremos tu informacion con otros.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary">Sing In</Button>
        </Stack>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text>
            Hola Admin, quieres crear un usuario?{" "}
            <Link to="/usuarios">Crear Usuario</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SingingScreen;
