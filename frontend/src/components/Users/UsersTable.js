import React, {useState, useEffect} from "react";
import {Table, Button, Row, Col, Alert} from 'react-bootstrap'
import {ObjData} from "./UsersRow";
import {UsersModal} from "../modals/UsersModal";
import {users} from "../../controllers/UsersController";

const UsersTable = () => {
  const [userModalShow, setUserModalShow] = useState(false)
  const [tableData, setTableData] = useState([])
  const [successText, setsuccessText] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const fetchData = async () => {
    try {
      const {data} = await users.getUsers()
      setTableData(data)
    } catch ({response}) {
      console.log(response)
    }
  }
  useEffect(() => {
    fetchData();
  }, [setTableData]);

  const handleModal = (band) => {
    setUserModalShow(band)
  }
  const handleSuccesAlert = (band) => {
    setShowAlert(band)
    fetchData();
    setTimeout(() => {
      setsuccessText('')
      setShowAlert(!band)
    }, 10000)
  }
  const habdleSuccessText = (text) => {
    setsuccessText(text)
  }
  const modal = userModalShow ?
    <UsersModal modalTitle={'Crear usuario'} habdleSuccessText={habdleSuccessText} handleSuccesAlert={handleSuccesAlert}
                setUserModalShow={handleModal} UserModalShow={userModalShow}/> : null;
  const successAlert = showAlert ?
    <Row>
      <Alert as={Col} variant={'success'}>{successText}</Alert>
    </Row> : null;
  return (
    <>
      {modal}
      <Row>
        <Col md={10}/>
        <Button className="mb-3 mt-lg-5" as={Col} onClick={() => setUserModalShow(true)} variant="success">Crear
          usuario</Button>
      </Row>
      {successAlert}
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
          {tableData.length ? tableData.map(objPerson => {
            return <ObjData setUserModalShow={setUserModalShow} objPerson={objPerson} key={objPerson._id}/>
          }) : <tr>
            <td colSpan="12">No hay datos para mostrar</td>
          </tr>
          }
          </tbody>
        </Table>
      </Row>
    </>
  )
}
export default UsersTable