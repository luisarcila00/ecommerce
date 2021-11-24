import React, {useEffect, useState} from "react";
import {Button, Modal, Row, Col, Form, FloatingLabel, Alert} from "react-bootstrap"
import moment from "moment"
import {regions} from "../../controllers/statesAndCitiesController"
import {users} from "../../controllers/UsersController"

export const UsersModal = ({options}) => {
  const [validated, setValidated] = useState(false);
  const [cities, setCities] = useState([]);

  const [user_id, setUserId] = useState('');
  const [full_name, setFull_name] = useState('');
  const [document_type, setDocumentType] = useState('');
  const [document, setDocument] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedStates, setSelectedStates] = useState('');
  const [selectedCities, setSelectedCities] = useState('');
  const [username, setUsername] = useState('');
  const [roles, setRoles] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConsfirmPassword] = useState('');
  const [usernameError, setusernameError] = useState('Debe ingresar un nombre de usuario.');
  const [errText, setErrText] = useState('');
  const [showErr, setShowErr] = useState(false)
  const errAlert = showErr ?
    <Alert variant={'danger'}>{errText}</Alert> : null;


  const handleFullName = (e) => setFull_name(e.target.value);
  const handledocumentType = (e) => setDocumentType(e.target.value);
  const handledocument = (e) => setDocument(e.target.value);
  const handleBirthDate = (e) => setBirthDate(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleSelectedState = (e) => setSelectedStates(e.target.value)
  const handleSelectedCity = (e) => setSelectedCities(e.target.value)
  const handleUsername = (e) => setUsername(e.target.value);
  const handleUserType = (e) => setRoles(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConsfirmPassword(e.target.value);
  useEffect(() => getCities(selectedStates), [selectedStates])

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
      const {data} = await regions.getCities(state)
      setCities(data)
    } catch ({response}) {
      console.log(response)
    }
  }
  const createUser = async () => {
    try {
      const user = {
        full_name,
        document_type,
        document,
        birth_date,
        address,
        email,
        phone,
        selectedStates,
        selectedCities,
        username,
        roles,
        password,
        confirmPassword
      }
      const crear = options.userModalShow.title === 'Crear usuario' ? await users.createUser(user) : await users.editUser(user, user_id)
      handleClose()
      setAll({})
      options.habdleSuccessText(crear.data);
      options.handleSuccesAlert(true);
    } catch ({response}) {
      setErrText(response && response.data ? response.data : 'Se presento un error ')
      setShowErr(true)
      setTimeout(() => {
        setErrText('')
        setShowErr(false)
      }, 10000)
    }
  }
  const setAll = (data) => {
    setUserId(data._id || '')
    setFull_name(data.full_name || '');
    setDocumentType(data.document_type || '');
    setDocument(data.document || '');
    setBirthDate(data.birth_date || '');
    setAddress(data.address || '');
    setEmail(data.email || '');
    setPhone(data.phone || '');
    setSelectedStates(data.state || '');
    setSelectedCities(data.city || '');
    setUsername(data.username || '');
    setRoles(data.roles || '');
    setPassword('');
    setConsfirmPassword('');
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
              <Form.Control required value={full_name} onChange={handleFullName} type="text"
                            placeholder="Nombre del cliente"/>
              <Form.Control.Feedback type="invalid">
                Debe ingresar un nombre.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group id={'document'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
                  <Form.Select onChange={handledocumentType} value={document_type} required
                               aria-label="Tipo de documento">
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
                  <Form.Control required value={document} onChange={handledocument} type="number"
                                placeholder="Número de documento"/>
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
                  <Form.Control value={birth_date} onChange={handleBirthDate} type="date"
                                max={moment().subtract(18, 'year').format('YYYY-MM-DD')}
                                placeholder="01/01/1900"/>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Dirección">
                  <Form.Control required value={address} onChange={handleAddress} type="text" placeholder="Dirección"/>
                  <Form.Control.Feedback type="invalid">
                    Debe proporcionar una dirección de residencia.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'email-phone'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico">
                  <Form.Control value={email} onChange={handleEmail} type="email" placeholder="correo@ejemplo.com"/>
                  <Form.Control.Feedback type="invalid">
                    Debe proporcionar un correo electronico válido cuenta@ejemplo.com.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
                  <Form.Control required value={phone} onChange={handlePhone} type="number" placeholder="Teléfono"/>
                  <Form.Control.Feedback type="invalid">
                    Debe proporcionar un numero de teléfono válido.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group id={'department-city'} className="mb-3">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Departamento">
                  <Form.Select required value={selectedStates} aria-label="Departamento" onChange={handleSelectedState}>
                    <option/>
                    {options.states.map(state =>
                      <option key={state.id} value={state.id}>{state.name}</option>)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Selecciona una opción válida
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Ciudad">
                  <Form.Select required value={selectedCities} aria-label="Ciudad" onChange={handleSelectedCity}>
                    <option/>
                    {cities.map(city =>
                      <option key={city.id} value={city.id}>{city.name}</option>)}
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
                  <Form.Control required value={username} onChange={handleUsername} type="text"
                                placeholder="Nombre de usuario"/>
                  <Form.Control.Feedback type="invalid">
                    {usernameError}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Seleccione un tipo de usuario">
                  <Form.Select value={roles} onChange={handleUserType}
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
                  <Form.Control required={options.userModalShow.data ? false : true}
                                disabled={options.userModalShow.data ? true : false}
                                value={options.userModalShow.data ? '*********' : password}
                                onChange={handlePassword}
                                type="password"
                                placeholder="Contraseña"/>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar una contraseña.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Confirmar contraseña">
                  <Form.Control required={options.userModalShow.data ? false : true}
                                disabled={options.userModalShow.data ? true : false}
                                value={options.userModalShow.data ? '*********' : confirmPassword}
                                onChange={handleConfirmPassword} min-length={5}
                                type="password" placeholder="Confirmar contraseña"/>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar la confirmación de contraseña.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control value={user_id} type="hidden"/>
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