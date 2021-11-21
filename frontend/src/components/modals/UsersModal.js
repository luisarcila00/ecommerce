import React, {useState} from "react";
import {Button, Modal, Row, Col, Form, FloatingLabel} from "react-bootstrap"
import moment from "moment"

export const UsersModal = ({modalTitle, UserModalShow, setUserModalShow}) => {
  const [validated, setValidated] = useState(false);
  const [cities, setCities] = useState([]);
  const handleClose = () => setUserModalShow(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form.checkValidity())) {
      event.stopPropagation();
    } else {
      //en caso de que los datos del formulario sean validos se ejecuta este código
    }
    setValidated(true);
  };
  const handleState = () => {
    //Aca se hace un llamado a la api para obtener las ciudades
    setCities([{id: 1, name: 'Santa Rosa de Cabal'}, {id: 2, name: 'Pereira'}, {id: 3, name: 'Quinchia'}])
  }
  //Hay que hacer una peticion en el ciclo de vida del componente al crearse para obtener los departamentos
  const states = [{id: "1", name: "Risaralda"}, {id: "2", name: "Antioquia"}, {id: "3", name: "Quindio"}, {
    id: "4",
    name: "Bogota"
  }]
  return (
    <Modal
      size="lg"
      show={UserModalShow}
      onHide={() => setUserModalShow(false)}
      aria-labelledby="users-modal-title"
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="users-modal-title">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id={'full_name'} className="mb-3">
            <FloatingLabel controlId="floatingInputGrid" label="Nombre del cliente">
              <Form.Control required type="text" placeholder="Nombre del cliente"/>
              <Form.Control.Feedback type="invalid">
                Debe ingresar un nombre.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group id={'document'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
                  <Form.Select required aria-label="Tipo de documento">
                    <option></option>
                    <option value="cc">CEDULA DE CIUDADANIA</option>
                    <option value="nit">NIT</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Selecciona una opción válida
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Número de documento">
                  <Form.Control required type="number" placeholder="Número de documento"/>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar un número de documento válido.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'birth-date-address'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Fecha de nacimiento">
                  <Form.Control type="date" max={moment().subtract(18, 'year').format('YYYY-MM-DD')}
                                placeholder="01/01/1900"/>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Dirección">
                  <Form.Control type="text" placeholder="Dirección"/>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'email-phone'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico">
                  <Form.Control type="email" placeholder="correo@ejemplo.com"/>
                  <Form.Control.Feedback type="invalid">
                    Debe proporcionar un correo electronico válido cuenta@ejemplo.com.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
                  <Form.Control type="number" placeholder="Teléfono"/>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'department-city'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Departamento">
                  <Form.Select required aria-label="Departamento" onChange={handleState}>
                    <option/>
                    {states.map(state =>
                      <option value={state.id}>{state.name}</option>)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Selecciona una opción válida
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Ciudad">
                  <Form.Select required aria-label="Ciudad" onChange={handleState}>
                    <option/>
                    {cities.map(city =>
                      <option value={city.id}>{city.name}</option>)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Selecciona una opción válida
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'user-type-username'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Nombre de usuario">
                  <Form.Control required type="text" placeholder="Nombre de usuario"/>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar un nombre de usuario.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Seleccione un tipo de usuario">
                  <Form.Select required aria-label="Seleccione un tipo de usuario">
                    <option></option>
                    <option value="reseller">Distribuidor</option>
                    <option value="pdv">Punto de venta</option>
                    <option value="provider">Proveedor</option>
                    <option value="admin">Administrador</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Selecciona una opción válida
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'password'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Contraseña">
                  <Form.Control required type="password" placeholder="Contraseña"/>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar una contraseña.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Confirmar contraseña">
                  <Form.Control required min-length={5} type="password" placeholder="Confirmar contraseña"/>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar la confirmación de contraseña.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button type={'submit'} variant="primary">Guardar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}