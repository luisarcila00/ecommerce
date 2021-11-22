import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function RegisterScreen() {
  return (
    <div>
      <Form className="form">
        <Form.Group>
          <h3>Registro</h3>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="email" placeholder="Apellidos" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email o Usuario</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email o Usuario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="number" placeholder="Celular" />
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary">Registro</Button>
        </Stack>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text>
            Ya tienes cuenta? <Link to="/singing">Iniciar Sesion</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RegisterScreen;
