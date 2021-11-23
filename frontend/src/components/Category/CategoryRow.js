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
      <td>{objCategory.Category }</td>
      <td>
        <Button variant={"primary"} onClick={handleEdit}>Editar</Button>
        &nbsp;
        <Button variant={'danger'} onClick={handleEdit}>Eliminar</Button>
      </td>
    </tr>
  )
}