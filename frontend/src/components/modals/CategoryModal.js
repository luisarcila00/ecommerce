import React, {useState} from "react";
import {Button, Modal, Form, FloatingLabel} from "react-bootstrap"

export const CategoryModal = ({modalTitle, CategoryModalShow, setCategoryModalShow}) => {
  const [validated, setValidated] = useState(false);
  const handleClose = () => setCategoryModalShow(false);
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

  return (
    <Modal
      size="lg"
      show={CategoryModalShow}
      onHide={() => setCategoryModalShow(false)}
      aria-labelledby="category-modal-title"
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="category-modal-title">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id={'categoria'} className="mb-3">
            <FloatingLabel controlId="floatingInputGrid" label="Nombre del cliente">
              <Form.Control required type="text" placeholder="Nombre del cliente"/>
              <Form.Control.Feedback type="invalid">
                Debe ingresar un nombre.
              </Form.Control.Feedback>
            </FloatingLabel>
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