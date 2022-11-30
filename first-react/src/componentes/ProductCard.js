import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
  return (
    <div className='productCard d-inline-block text-center'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{props.price}</Card.Title>
                <Card.Text>{props.title}</Card.Text>
                <Button variant="primary">Editar produto</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default ProductCard;