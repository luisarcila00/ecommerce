import React, {useState, useEffect} from "react";
import {Button, Row, Col, Alert} from 'react-bootstrap'
import MaterialTable from "material-table";
import {tableIcons} from "../../helpers/tables/materialIcons";
import {tableLocalization} from "../../helpers/tables/tableLocalization";
import {ProductsModal} from "../modals/ProductModal";
import {products} from "../../controllers/productsController";

const ProductsTable = () => {
  const [productModalShow, setProductModalShow] = useState({show: false})
  const [modalData, setModalData] = useState({})
  const [tableData, setTableData] = useState([])
  const [successText, setsuccessText] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const columns = [
    {
      title: "SKU",
      field: "sku"
    },
    {
      title: "Nombre",
      field: "name",
      cellStyle: {width: '500px'}
    },
    {
      title: "Descripcion",
      field: "description",
    },
    {
      title: "Imagen",
      field: "galery",
      render: rowData => <img src={"http://localhost:4000" + rowData.gallery} style={{width: 100, borderRadius: '50%'}}/>
    },
    {
      title: "Precio",
      field: "price",
      type: "numeric",
      cellStyle: {width: '200px'}
    },
    {
      title: "Categoria",
      field: "category",
      cellStyle: {width: '200px'}
    },
    {
      title: "Stock",
      field: "stock",
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
      const {data} = await products.getProducts()
      setTableData(data)
    } catch ({response}) {
      console.log(response)
    }
  }
  const handleModal = (band) => {
    setProductModalShow(band)
    if (band.show) {
      if (band.data) {
        debugger
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
    handleModal({show: true, title: 'Editar producto', data: rowData})
  }
  const forModal = {
    productModalShow,
    habdleSuccessText,
    handleSuccesAlert,
    modalData,
    setProductModalShow: handleModal
  }
  useEffect(() => fetchData(), [setTableData]);
  const modal = productModalShow.show ? <ProductsModal options={forModal}/> : null;
  const successAlert = showAlert ? <Row><Alert as={Col} variant={'success'}>{successText}</Alert></Row> : null;
  return (
      <>
        {modal}
        <Row>
          <Col md={10}/>
          <Button className="mb-3 mt-lg-5" as={Col}
                  onClick={() => handleModal({show: true, title: 'Crear producto', disableInputs: false})}
                  variant="success">Crear
            producto</Button>
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
                  tooltip: 'Editar producto',
                  onClick: handleEdit
                },
                {
                  icon: tableIcons.Delete,
                  tooltip: 'Eliminar produto',
                  onClick: (event, rowData) => alert("You delete " + rowData.name)
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
export default ProductsTable