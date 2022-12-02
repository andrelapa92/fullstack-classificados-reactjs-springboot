import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function ProductCard(props) {

  return (
    <div className='productCard d-inline-block text-center'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{props.price}</Card.Title>
                <Card.Text>{props.title}</Card.Text>
                <Card.Text className='categoryText border rounded-pill'>{props.category}</Card.Text>
                <Link to={props.btnLink}>
                  <Button variant="primary">Editar produto</Button>
                </Link>
            </Card.Body>
        </Card>
    </div>
  );
}

export default ProductCard;