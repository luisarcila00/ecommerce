import React, {useState, useEffect} from "react";
import {Table, Button, Row, Col, Alert} from 'react-bootstrap'
import {ObjData} from "./UsersRow";
import {UsersModal} from "../modals/UsersModal";
import {users} from "../../controllers/UsersController";
import {regions} from "../../controllers/statesAndCitiesController";

const UsersTable = () => {
  const [userModalShow, setUserModalShow] = useState({show: false})
  const [modalData, setModalData] = useState({})
  const [states, setStates] = useState([]);
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
  useEffect(async () => await getStates(), [setStates])
  const getStates = async () => {
    try {
      const {data} = await regions.getStates()
      setStates(data)
    } catch ({response}) {
      console.log(response)
    }
  }
  const handleModal = async (band) => {
    setUserModalShow(band)
    if (band.show) {
      if (band.data) {
        const row = tableData.find(row => row._id === band.data.id)
        setModalData(row)
      }
    } else {
      setModalData({})
    }
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
  const forModal = {
    userModalShow,
    states,
    habdleSuccessText,
    handleSuccesAlert,
    modalData,
    setUserModalShow: handleModal
  }

  const modal = userModalShow.show ?
    <UsersModal options={forModal}/> : null;
  const successAlert = showAlert ?
    <Row>
      <Alert as={Col} variant={'success'}>{successText}</Alert>
    </Row> : null;
  return (
    <>
      {modal}
      <Row>
        <Col md={10}/>
        <Button className="mb-3 mt-lg-5" as={Col}
                onClick={() => handleModal({show: true, title: 'Crear usuario', disableInputs: false})}
                variant="success">Crear
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
            return <ObjData setUserModalShow={handleModal} objPerson={objPerson} key={objPerson._id}/>
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