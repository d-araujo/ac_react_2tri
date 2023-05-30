import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
function Carta  ( imagee, titulo, descricao, preco) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagee} className="oo" />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
         {descricao}
        </Card.Text>
        <Card.Text>
         {preco}
        </Card.Text>
        <Button variant="primary">Compre</Button>
      </Card.Body>
    </Card>
  )
}

export default Carta;