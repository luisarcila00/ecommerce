import React, {useState, useEffect} from "react";
import {Button, Row, Col, Alert} from 'react-bootstrap'
import MaterialTable from "material-table";
import {tableIcons} from "../../helpers/tables/materialIcons";
import {tableLocalization} from "../../helpers/tables/tableLocalization";
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
  const columns = [
    {
      title: "Usuario",
      field: "username"
    },
    {
      title: "Nombre",
      field: "full_name",
      cellStyle: {width: '500px'}
    },
    {
      title: "Rol",
      field: "roles",
      lookup: {'pdv': 'Punto de venta', 'reseller': 'Distribuidor', 'admin': 'Administrador'}
    },
    {
      title: "Saldo",
      field: "balance",
      type: "numeric",
      cellStyle: {width: '200px'}
    }
  ]
  const options = {
    actionsColumnIndex: -1,
    headerStyle: {
      backgroundColor: '#060b26',
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: '20px'
    },
    rowStyle: rowData => ({backgroundColor: (rowData.tableData.id % 2 === 0) ? '#EEE' : '#FFF'}),
    exportButton: true,
    filtering: true,
  }
  const fetchData = async () => {
    try {
      const {data} = await users.getUsers()
      setTableData(data)
    } catch ({response}) {
      console.log(response)
    }
  }
  const getStates = async () => {
    try {
      const {data} = await regions.getStates()
      setStates(data)
    } catch ({response}) {
      console.log(response)
    }
  }
  const handleModal = (band) => {
    setUserModalShow(band)
    if (band.show) {
      if (band.data) {
        setModalData(band.data)
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
  const handleEdit = (e, rowData) => {
    handleModal({show: true, title: 'Editar usuario', data: rowData})
  }
  const forModal = {
    userModalShow,
    states,
    habdleSuccessText,
    handleSuccesAlert,
    modalData,
    setUserModalShow: handleModal
  }
  useEffect(() => fetchData(), [setTableData]);
  useEffect(() => getStates(), [setStates])
  const modal = userModalShow.show ? <UsersModal options={forModal}/> : null;
  const successAlert = showAlert ? <Row><Alert as={Col} variant={'success'}>{successText}</Alert></Row> : null;
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
        <MaterialTable
          columns={columns}
          icons={tableIcons}
          data={tableData}
          actions={[
            {
              icon: tableIcons.Edit,
              tooltip: 'Editar usuario',
              onClick: handleEdit
            },
            {
              icon: tableIcons.Delete,
              tooltip: 'Eliminar usuario',
              onClick: (event, rowData) => alert("You delete " + rowData.username)
            },
          ]}
          options={options}
          isLoading={tableData.length ? false : true}
          localization={tableLocalization}
          title={false}
        />
      </Row>
    </>
  )
}
export default UsersTable