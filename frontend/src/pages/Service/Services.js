import React from "react";
import { Accordion, Table, Image } from "react-bootstrap";
import img1 from "../Service/netflix.png"
import img2 from "../Service/plex.png"
import img3 from "../Service/licor.png"
import img4 from "../Service/videojuegos.png"
import img5 from "../Service/it.png"
import img6 from "../Service/fitness.png"
import img7 from "../Service/ropa.png"
import img8 from "../Service/play.png"
import img9 from "../Service/disney.png"
const Services = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{paddingTop: "5%", position:'relative'}}>
        Services
      </h1>
      <hr />
      <Accordion style={{paddingTop: "5%", position:'relative', left:'80px'}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Plataformas de Streaming</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Consolas y videojuegos</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Licores</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Ropa y Accesorios</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Juegos y Juguetes</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <Table style={{paddingTop: "5%", position:'relative', left:'80px'}}>
      
        <tbody>
          <tr>
            <td><Image src={img1} roundedCircle /></td>
            <td><Image src={img2} roundedCircle /></td>
            <td><Image src={img3} roundedCircle /></td>
          </tr>
          <tr>
            <td><Image src={img4} roundedCircle /></td>
            <td><Image src={img5} roundedCircle /></td>
            <td><Image src={img6} roundedCircle /></td>
          </tr>
          <tr>
            <td><Image src={img8} roundedCircle /></td>
            <td><Image src={img7} roundedCircle /></td>
            <td><Image src={img9} roundedCircle /></td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
};
export default Services;
