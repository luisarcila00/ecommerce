import React from 'react';
import UsersTable from "../components/Users/UsersTable";
import {Container} from "react-bootstrap"
function Usuarios () {
  return (
    <Container  style={{paddingTop: "5%", position:'relative', left:'80px'}}>
      <UsersTable/>
    </Container>
  );
}

export default Usuarios;