import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {Login} from "../controllers/LoginController"
import {Alert} from "react-bootstrap";

const LoginScreen = () => {
  const [userData, setUserData] = useState({});
  const [showErr, setShowErr] = useState(false)
  const errAlert = showErr ? <Alert variant={'danger'}>{userData.err || ''}</Alert> : null;
  const handleUserData = (e) => {
    let obj = {...userData, [e.target.name]: e.target.value}
    setUserData(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch()
  }

  const fetch = async () => {
    try {
      let {data} = await Login.login(userData)
      localStorage.setItem('UID', data)
      console.log(data);
    } catch ({response}) {
      debugger
      let obj = {...userData, err: response.data}
      setUserData(obj)
      setShowErr(true)
      setTimeout(() => setShowErr(false), 5000)
      //console.log(response.data);
    }

  }

  return (
    <div>
      <Form className="text-center" style={{paddingTop: "30%"}} onSubmit={handleSubmit}>
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
    </div>
  );
};

export default LoginScreen;
