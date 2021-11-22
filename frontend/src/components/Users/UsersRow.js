import React from "react";
import {Button} from "react-bootstrap";

export const ObjData = ({objPerson, setUserModalShow}) => {
  const handleEdit = (e) => {
    setUserModalShow({show: true, title: 'Editar usuario', data: e.target})
  }
  return (
    <tr>
      <td>{objPerson.username}</td>
      <td>{objPerson.full_name}</td>
      <td>{objPerson.roles === 'admin' ? 'Administrador' : objPerson.roles === 'reseller' ? 'Distribuidor' : 'Punto de venta'}</td>
      <td>{objPerson.balance}</td>
      <td>
        <Button id={objPerson._id} variant={"primary"} onClick={handleEdit}>Editar</Button>
        &nbsp;
        <Button variant={'danger'} onClick={handleEdit}>Eliminar</Button>
      </td>
    </tr>
  )
}