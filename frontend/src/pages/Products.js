import React from 'react';
import {Container} from "react-bootstrap";
import ProductsTable from "../components/products/ProductsTable";

function Products() {
  return (
    <Container style={{paddingTop: "5%", position:'relative', left:'70px'}} >
      <ProductsTable/>
    </Container>
  );
}

export default Products;