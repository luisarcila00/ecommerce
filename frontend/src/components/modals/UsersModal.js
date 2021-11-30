import React, {useEffect, useState} from "react";
import {Button, Modal, Row, Col, Form, FloatingLabel, Alert} from "react-bootstrap"
import moment from "moment"
import {regions} from "../../controllers/statesAndCitiesController"
import {users} from "../../controllers/UsersController"

const objForm = {
  _id: "",
  full_name: "",
  document_type: "",
  document: "",
  birth_date: "",
  address: "",
  phone: "",
  state: "",
  city: "",
  username: "",
  roles: "",
  password: "",
  confirmPassword: "",
}
const errText = {
  username: 'Debe ingresar un nombre de usuario.',
  modalConfirm: '',
  address: 'Debe proporcionar una dirección de residencia.',
  full_name: 'Debe ingresar un nombre.',
  document: "Debe ingresar un número de documento válido.",
  birth_date: "",
  email:"Debe proporcionar un correo electronico válido cuenta@ejemplo.com.",
  phone: "Debe proporcionar un numero de teléfono válido.",
  select: "Selecciona una opción válida.",
  password: "Debe ingresar una contraseña.",
  confirmPassword: "Debe ingresar la confirmación de contraseña.",
}
export const UsersModal = ({options}) => {
  const [validated, setValidated] = useState(false);
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState(objForm)
  const [objErr, setObjErr] = useState(errText);
  const [showErr, setShowErr] = useState(false)
  const errAlert = showErr ? <Alert variant={'danger'}>{objErr.modalConfirm}</Alert> : null;

  const handleForm = (e) => {
    let obj = {...form, [e.target.name]: e.target.value}
    setForm(obj)
  }

  useEffect(() => getCities(form.state), [form.state])

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form.checkValidity())) {
      event.stopPropagation();
    } else {
      //en caso de que los datos del formulario sean validos se ejecuta este código
      createUser()
    }
    setValidated(true);
  };
  const getCities = async (state) => {
    try {
      if (!state) return
      const {data} = await regions.getCities(state)
      setCities(data)
    } catch ({response}) {
      console.log(response)
    }
  }
  const createUser = async () => {
    try {
      const crear = options.userModalShow.title === 'Crear usuario' ? await users.createUser(form) : await users.editUser(form, form._id)
      handleClose()
      setAll({})
      options.habdleSuccessText(crear.data);
      options.handleSuccesAlert(true);
    } catch ({response}) {
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
  }
  const setAll = (data) => {
    setForm(data);
  }
  useEffect(() => {
    setAll(options.modalData)
  }, [options.modalData])
  const handleClose = () => options.setUserModalShow({show: false, title: options.userModalShow.title});
  return (
    <Modal
      size="lg"
      show={options.userModalShow.show}
      onHide={() => options.setUserModalShow({show: false, title: options.userModalShow.title})}
      aria-labelledby="users-modal-title"
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="users-modal-title">
            {options.userModalShow.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id={'full_name'} className="mb-3">
            <FloatingLabel controlId="floatingInputGrid" label="Nombre del cliente">
              <Form.Control required
                            name={'full_name'}
                            value={form.full_name}
                            onChange={handleForm}
                            type="text"
                            placeholder="Nombre del cliente"/>
              <Form.Control.Feedback type="invalid">
                {objErr.full_name}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group id={'document'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
                  <Form.Select required
                               name={'document_type'}
                               onChange={handleForm}
                               value={form.document_type}
                               aria-label="Tipo de documento">
                    <option></option>
                    <option value="cc">CEDULA DE CIUDADANIA</option>
                    <option value="nit">NIT</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {objErr.select}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Número de documento">
                  <Form.Control required
                                name={'document'}
                                value={form.document}
                                onChange={handleForm}
                                type="number"
                                placeholder="Número de documento"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.document}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'birth-date-address'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Fecha de nacimiento">
                  <Form.Control value={form.birth_date}
                                name={'birth_date'}
                                onChange={handleForm}
                                type="date"
                                max={moment().subtract(18, 'year').format('YYYY-MM-DD')}
                                placeholder="01/01/1900"/>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Dirección">
                  <Form.Control required
                                name={'address'}
                                value={form.address}
                                onChange={handleForm}
                                type="text"
                                placeholder="Dirección"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.address}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'email-phone'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico">
                  <Form.Control value={form.email}
                                name={'email'}
                                onChange={handleForm}
                                type="email"
                                placeholder="correo@ejemplo.com"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.email}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
                  <Form.Control required
                                name={'phone'}
                                value={form.phone}
                                onChange={handleForm}
                                type="number"
                                placeholder="Teléfono"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.phone}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'department-city'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Departamento">
                  <Form.Select required
                               name={'state'}
                               value={form.state}
                               aria-label="Departamento"
                               onChange={handleForm}>
                    <option/>
                    {options.states.map(state =>
                      <option key={state.id} value={state.id}>{state.name}</option>)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {objErr.select}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Ciudad">
                  <Form.Select required
                               name={'city'}
                               value={form.city}
                               aria-label="Ciudad"
                               onChange={handleForm}>
                    <option/>
                    {cities.map(city =>
                      <option key={city.id} value={city.id}>{city.name}</option>)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {objErr.select}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'user-type-username'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Nombre de usuario">
                  <Form.Control required
                                value={form.username}
                                name={'username'}
                                onChange={handleForm}
                                type="text"
                                placeholder="Nombre de usuario"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.username}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Seleccione un tipo de usuario">
                  <Form.Select value={form.roles} onChange={handleForm}
                               name={'roles'}
                               required={options.userModalShow.data ? false : true}
                               disabled={options.userModalShow.data ? true : false}
                               aria-label="Seleccione un tipo de usuario">
                    <option></option>
                    <option value="reseller">Distribuidor</option>
                    <option value="pdv">Punto de venta</option>
                    <option value="provider">Proveedor</option>
                    <option value="admin">Administrador</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {objErr.select}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'password'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Contraseña">
                  <Form.Control required={options.userModalShow.data ? false : true}
                                disabled={options.userModalShow.data ? true : false}
                                name={'password'}
                                value={options.userModalShow.data ? '*********' : form.password}
                                onChange={handleForm}
                                type="password"
                                placeholder="Contraseña"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.password}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Confirmar contraseña">
                  <Form.Control required={options.userModalShow.data ? false : true}
                                disabled={options.userModalShow.data ? true : false}
                                name={'confirmPassword'}
                                value={options.userModalShow.data ? '*********' : form.confirmPassword}
                                onChange={handleForm} min-length={5}
                                type="password" placeholder="Confirmar contraseña"/>
                  <Form.Control.Feedback type="invalid">
                    {objErr.confirmPassword}
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