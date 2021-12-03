import React from 'react'

import {Row, Col, Image} from 'react-bootstrap'
import './About.css'
import logo from './Img/logo.jpeg'
import coworkers from './Img/coworkers.png'
import netflix from './Img/netflix.png'

const About = () => {
  return (
    <div className="container">
      
      <Row>
        <Col md={7} style={{padding:20}}>
          <h1 className="text-align title">
            Sobre nosotros
          </h1>
        </Col>
        <Col md={6} >
          <Row>
            <Col md={4} style={{width: 270, height: 240}}>
              <Image src= {netflix} roundedCircle className="img" />
            </Col>
            <Col md={7}>
              <p className="text"><b>PI COMMERCE</b> surgió como idea de negocio durante la época de aislamiento esto como una manera de generar ingresos durante un momento en el cual el mundo se congelo. <br></br><br></br>
              Se centro en venta de cuentas de streaming en las cuales se tiene en catalogo <b>Plex, Netflix, Amazon Prime, Disney +,</b> entre otras mas. Se tiene de igual manera la venta de <b>Accesorios para celular y electrodomesticos.</b><br></br><br></br> </p>
            </Col>
          </Row>
            <Row className="card-content">
                <Col md={7} style={{paddingTop:25}}>
                  <p className="text-decorate">El entretenimiento de los clientes que deciden escoger los servicios es importante, por ende, contamos con mas de 3,000 distribuidores. <br></br><br></br> La plataforma se encuentra disponible desde cualquier dispositivo movil o computadora, su versatilidad es <b>¡ASOMBROSA!</b> </p>
                </Col>
                <Col md={4} style={{width: 240, height: 220}}>
                  <Image src= {coworkers} roundedCircle className="img" />
                </Col>
            </Row>
        </Col>
        <Col md={6} >
          <Row>
            <Col md={12}>
              <p className="subtitle"><b>MODELO DE NEGOCIO</b></p>
            </Col>
            <Col md={12} style={{paddingTop:10}}>
              <p className="text">Se maneja dos opciones que conforman el modelo de negocio, a continuación se exponen: <br></br><br></br> <b>1. Punto de venta:</b>se ingresa como "vendedor" a la plataforma para adquirir los productos deseados a los mejores precios que se adapten al negocio que tiene. Para poder ingresar por esta sección, la persona 
              interesada debe ser referida por un distribuidor que se encuentra activo en la pagina, de otra manera, no podrá ingresar sin referencia. <br></br><br></br>
              <b>2. Cliente:</b> se ingresa como usuario donde podrá realizar compras directas en la plataforma sin ningún problema.<br></br><br></br> <b>NOTA:</b> encontrará una gran variedad de cuentas de plataformas para distribuir a excelentes precios y sobre todo 100% estables. A parte de objetos de diversas categorías disponibles en la pagina.</p>
            </Col>
          </Row>
        </Col>
      </Row>    
      </div> 
  )
}
export default About;