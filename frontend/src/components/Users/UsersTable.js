import React, {useState} from "react";
import {Table, Button, Row, Col} from 'react-bootstrap'
import {ObjData} from "./UsersRow";
import {UsersModal} from "../modals/UsersModal";

const datos = [{
  _id: '13231',
  username: 'luisarcila00',
  full_name: 'Luis Eduardo Arcila Trujillo',
  roles: 'Administrador',
  balance: '$0'
},
  {
    _id: '775675',
    username: 'johanap',
    full_name: 'Johana Andrea Parra Serna',
    roles: 'Distribuidor',
    balance: '$5.000'
  },
  {_id: '353456', username: '24618375', full_name: 'Ana Julia Trujillo', roles: 'Punto de venta', balance: '$50.000'},
  {
    _id: '32423',
    username: 'jacinto',
    full_name: 'Jacinto Manuel Quito Chame',
    roles: 'Punto de venta',
    balance: '$500.000'
  }]
const UsersTable = () => {
  const [userModalShow, setUserModalShow] = useState(false)
  const handleModal = (band) => {
    setUserModalShow(band)
  }
  const modal = userModalShow ?
    <UsersModal modalTitle={'Crear usuario'} setUserModalShow={handleModal} UserModalShow={userModalShow}/> : null;
  return (
    <>
      {modal}
      <Row>
        <Col md={10}/>
        <Button className="mb-3 mt-lg-5" as={Col} onClick={() => setUserModalShow(true)} variant="success">Crear usuario</Button>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Saldo</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          {datos.map(objPerson => {
            return <ObjData objPerson={objPerson} key={objPerson.id}/>
          })}
          </tbody>
        </Table>
      </Row>
    </>
  )
}
export default UsersTable