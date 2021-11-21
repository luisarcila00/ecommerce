import React from "react";
import {Button} from "react-bootstrap";

export const ObjData = ({objPerson}) => {
  const handleEdit = (e) => {
    console.log(e)

  }
  const handleRow = (e)=>{
    console.log(e)

  }
  return (
    <tr onClick={handleRow}>
      <td>{objPerson.username}</td>
      <td>{objPerson.full_name}</td>
      <td>{objPerson.roles}</td>
      <td>{objPerson.balance}</td>
      <td>
        <Button variant={"primary"} onClick={handleEdit}>Editar</Button>
        &nbsp;
        <Button variant={'danger'} onClick={handleEdit}>Eliminar</Button>
      </td>
    </tr>
  )
}