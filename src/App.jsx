import './App.css'
import Container from 'react-bootstrap/Container';
import Imgs from './Imgs';
import MyNavBar from './Componentes';
import Myrodape from './rodape';
import Carta from './card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
      
    <body className="color3">

    <MyNavBar></MyNavBar>
    <Imgs></Imgs>
    
    <Container>
    <Row>
        <Col xs={6} md={4}>
         {Carta('../src/assets/2.jpg',"Iphone 11","64 GB","R$2.799,00")}
        </Col>
        <Col xs={6} md={4}>
     {Carta('../src/assets/3.jpg',"Iphone 13","128 GB","R$3.949,00")}
        </Col>
        <Col xs={6} md={4}>
    {Carta('../src/assets/4.jpg',"Iphone 14","512 GB","R$4.754,30")}
        </Col>
      </Row>
   </Container> 
   <br></br> <br></br><br></br><br></br>
   <Myrodape></Myrodape>
    </body>
   
  )
}

export default App
