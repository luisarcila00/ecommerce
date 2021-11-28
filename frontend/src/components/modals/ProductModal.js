import React, {useEffect, useState} from "react";
import {Button, Modal, Row, Col, Form, FloatingLabel, Alert} from "react-bootstrap"
import {products} from "../../controllers/productsController"
import {users} from "../../controllers/UsersController";

const objForm = {
  sku: "",
  name: "",
  description: "",
  sales_message: "",
  price: "",
  stock: "",
  discount: "",
  poster: "",
  galery: "",
  category: "",
}
const errText = {
  modalConfirm: '',
  sku: "",
  name: "",
  description: "",
  sales_message: "",
  price: "",
  stock: "",
  discount: "",
  poster: "",
  galery: "",
  category: "",
}
export const ProductsModal = ({options}) => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState(objForm)
  const [objErr, setObjErr] = useState(errText);
  const [showErr, setShowErr] = useState(false)
  const errAlert = showErr ? <Alert variant={'danger'}>{objErr.modalConfirm}</Alert> : null;

  const handleForm = (e) => {
    let obj = {...form, [e.target.name]: e.target.value}
    setForm(obj)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form.checkValidity())) {
      event.stopPropagation();
    } else {
      //en caso de que los datos del formulario sean validos se ejecuta este código
      createProduct()
    }
    setValidated(true);
  };
  const createProduct = async () => {
    try {
      const crear = options.productModalShow.title === 'Crear producto' ? await products.createProduct(form) : await products.updateProduct(form, form.sku)
      handleClose()
      setAll({})
      options.habdleSuccessText(crear.data);
      options.handleSuccesAlert(true);
    } catch ({response}) {
      debugger
      setObjErr(response && response.data ? {...objErr, modalConfirm: response.data} : {
        ...objErr,
        modalConfirm: 'Se presento un error'
      })
      setShowErr(true)
      setTimeout(() => {
        setObjErr({...objErr, modalConfirm: ''})
        setShowErr(false)
      }, 10000)
    }
  };
  const setAll = (data) => {
    setForm(data);
  }
  const handleClose = () => options.setProductModalShow({show: false, title: options.productModalShow.title});
  return (
    <Modal
      size="lg"
      show={options.productModalShow.show}
      onHide={() => options.setProductModalShow({show: false, title: options.productModalShow.title})}
      aria-labelledby="users-modal-title"
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="users-modal-title">
            {options.productModalShow.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id={'sku'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="SKU">
                  <Form.Control required
                                name={'sku'}
                                value={form.sku}
                                onChange={handleForm}
                                type="text"
                                placeholder="sku"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.sku}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Nombre">
                  <Form.Control required
                                name={'name'}
                                value={form.name}
                                onChange={handleForm}
                                type="text"
                                placeholder="sku"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.name}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'name'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <Form.Control required
                              as="textarea"
                              name={'description'}
                              onChange={handleForm}
                              placeholder="Mensaje de venta"
                              rows={5}/>
                <Form.Control.Feedback type="invalid">
                  {objErr.description}
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'price-category'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Precio">
                  <Form.Control required
                                value={form.price}
                                name={'price'}
                                onChange={handleForm}
                                type="number"
                                placeholder="Precio"/>
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                  {objErr.price}
                </Form.Control.Feedback>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Categoria">
                  <Form.Control required
                                name={'category'}
                                value={form.category}
                                onChange={handleForm}
                                type="text"
                                placeholder="Categoria"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.category}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control value={form._id} type="hidden"/>
              </Col>
            </Row>
          </Form.Group>
          {errAlert}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button type={'submit'} variant="primary">Guardar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}