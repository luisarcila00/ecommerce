import React, {useState} from "react";
import {Button, Modal, Form, FloatingLabel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


export const CategoryModal = ({modalTitle, categoryModalShow, setcategoryModalShow}) => {
  const [validated, setValidated] = useState(false);
  const handleClose = () => setcategoryModalShow(false);
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
console.log('categoryModalShow', categoryModalShow)
const [imagen, setImagen] = useState(null);
const subirImagen = e => {
setImagen(e); 

}
const insertarImagen = async () => {
  const f = new FormData();
  for (let index = 0; index < imagen.length; index++) {
    f.append("files", imagen[index]);	
  }
  await axios.post("http://localhost:3000/categorias", f)
  .then((response) => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error)
  })
}


  return (
    <Modal
      size="lg"
      show={categoryModalShow}
      onHide={() => setcategoryModalShow(false)}
      aria-labelledby="category-modal-title"
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="category-modal-title">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id={'categorias'} className="mb-3">
            <FloatingLabel controlId="floatingInputGrid" label="Ingrese una categoría">
              <Form.Control required type="text" placeholder="Ingrese una categoría"/>
              <Form.Control.Feedback type="invalid">
                Debe ingresar una categoría.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          <Form.Group id={'imagenes'} className="mb-3">
            <FloatingLabel controlId="floatingInputGrid">
              <h3>Imagen</h3>
              <input required type="file" name="files" multiple onChange={(e) => subirImagen(e.target.files)}/>
                <br/><br/>
              <Form.Control.Feedback type="invalid">
                Debe ingresar una imagen.                
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          <Form.Group id={'descripción'} className="mb-3">
            <FloatingLabel controlId="floatingInputGrid" label="Descripción">
              <Form.Control required type="text" placeholder="Descripción"/>
              <Form.Control.Feedback type="invalid">
                Debe ingresar una descripción.
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