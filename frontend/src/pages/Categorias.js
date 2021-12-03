import React from 'react';
import CategoryTable from "../components/Category/CategoryTable";
import {Container} from "react-bootstrap"

function Categorias () {

  return (
    <Container  style={{paddingTop: "5%", position:'relative', left:'80px'}} >
      <CategoryTable/>
    </Container>

  );
}

export default Categorias;