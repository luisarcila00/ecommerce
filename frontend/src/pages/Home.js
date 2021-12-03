import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import CarouselHome from '../components/CarouselHome';
import '../components/Home.css'





const Home = () => {
  return (
      <div className="container">
        
        <Container  style={{paddingTop: "5%", position:'relative', left:'70px'}} >
          <Row>
            <Col xs={{ order: 'last' }}></Col>
            <Col xs><CarouselHome /></Col>
            <Col xs={{ order: 'first' }}></Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={{ order: 'last' }}><Cards/></Col>
            <Col xs><Cards /></Col>
            <Col xs><Cards /></Col>
            <Col xs={{ order: 'first' }}><Cards/></Col>
          </Row>
            
        </Container>
      </div>
  )
}

export default Home
