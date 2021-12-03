import React, {useEffect, useState, useContext} from "react";
import {Button, Modal, Form, Alert} from "react-bootstrap"
import Stack from "react-bootstrap/Stack";
import {Login} from "../../controllers/LoginController";
import {useNavigate} from "react-router-dom";
import {AuthContext} from '../../auth/authContext';
import {types} from "../../types/types";

export const LoginModal = ({options}) => {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({});
  const [showErr, setShowErr] = useState(false)
  const errAlert = showErr ? <Alert variant={'danger'}>{userData.err}</Alert> : null;
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)
  const handleUserData = (e) => {
    let obj = {...userData, [e.target.name]: e.target.value}
    setUserData(obj)
  }

  const fetch = async () => {
    try {
      const {data} = await Login.login(userData)
      const action = {
        type: types.login,
        data: data
      }
      dispatch(action);
      const lastPath = localStorage.getItem('lastPath') || '/';
      navigate(lastPath, {
        replace: true
      });
      options.setLoginModalShow()
    } catch ({response}) {
      let obj = {...userData, err: response.data}
      setUserData(obj)
      setShowErr(true)
      setTimeout(() => setShowErr(false), 5000)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form.checkValidity())) {
      event.stopPropagation();
    } else {
      //en caso de que los datos del formulario sean validos se ejecuta este código
      fetch()
    }
    setValidated(true);
  };
  useEffect(() => {

  }, [options.modalData])
  return (
    <Modal
      size="sm"
      show={options.loginModalShow.show}
      onHide={() => options.setLoginModalShow()}
      aria-labelledby="users-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="users-modal-title"/>
      </Modal.Header>
      <Modal.Body>
        <Form className="text-center" onSubmit={handleSubmit} validated={validated}>
          <Form.Group>
            {errAlert}
            <h3>¡Hola! Ingresa tu usuario</h3>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control name={"username"} value={userData.username} onChange={handleUserData} type="text"
                          placeholder="Ingresa tu email o Usuario"/>
            <Form.Text className="text-muted">
              Nosotros nunca compartiremos tu informacion con otros.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control name={"password"} value={userData.password} onChange={handleUserData} type="password"
                          placeholder="Ingresa tu Contraseña"/>
          </Form.Group>

          <Stack gap={2} className="col-md-5 mx-auto">
            <Button type="submit" variant="secondary">Login</Button>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer/>
    </Modal>
  )
}