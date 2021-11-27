import React, { useState } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { ObjData } from "./CategoryRow";
import { CategoryModal } from "../modals/CategoryModal";

const datos = [
  {
    _id: "132",
    categoria: "Electrónica",
    imagen: "",
    descripcion: "artículos de electrónica"
  },
  {
    _id: "775",
    categoria: "películas",
    imagen: "",
    descripcion: "artículos de películas"
  },
  { 
    _id: "353",
    categoria: "Aseo",
    imagen: "",
    descripcion: "artículos de aseo"
  },
];


const CategoryTable = () => {
  const [categoryModalShow, setcategoryModalShow] = useState(false);
  const handleModal = (band) => {
    setcategoryModalShow(band);
  };

  const modal = categoryModalShow ? (
    <CategoryModal
      modalTitle={"Crear Categoría"}
      setcategoryModalShow={handleModal}
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
          onClick={() => handleModal(true)}
          variant="success"
        >
          Crear categoría
        </Button>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Imagen</th>
              <th>Descripción</th>
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
export default CategoryTable;
