import React, { useState } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { ObjData } from "./CategoryRow";
import { CategoryModal } from "../modals/CategoryModal";

const datos = [
  {
    _id: "132",
    categoria: "Electrónica"
  },
  {
    _id: "775",
    categoria: "películas"
  },
  { 
    _id: "353",
    categoria: "Aseo"
  },
];
const CategoriesTable = () => {
  const [categoryModalShow, setCategoryModalShow] = useState(false);
  const handleModal = (band) => {
    setCategoryModalShow(band);
  };
  const modal = categoryModalShow ? (
    <CategoryModal
      modalTitle={"Crear Categoría"}
      setCategoryModalShow={handleModal}
      categoryModalShow={categoryModalShow}
    />
  ) : null;
  return (
    <>
      {modal}
      <Row>
        <Col md={10} />
        <Button
          className="mb-3 mt-lg-5"
          as={Col}
          onClick={() => setCategoryModalShow(true)}
          variant="success"
        >
          Crear usuario
        </Button>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((objCategory) => {
              return <ObjData objCategory={objCategory} key={objCategory.id} />;
            })}
          </tbody>
        </Table>
      </Row>
    </>
  );
};
export default CategoriesTable;
