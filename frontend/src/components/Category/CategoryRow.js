import React from "react";
import {Button} from "react-bootstrap";

export const ObjData = ({objCategory}) => {
  const handleEdit = (e) => {
    console.log(e)

  }
  const handleRow = (e)=>{
    console.log(e)

  }
  return (
    <tr onClick={handleRow}>
      <td>{objCategory.categoria }</td>
      <td>{objCategory.imagen }</td>
      <td>{objCategory.descripcion }</td>
      <td>
        <Button variant={"primary"} onClick={handleEdit}>Editar</Button>
        &nbsp;
        <Button variant={'danger'} onClick={handleEdit}>Eliminar</Button>
      </td>
    </tr>
  )
}