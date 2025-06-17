import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Item({ producto }) {
  const navigate = useNavigate()
  return (
    <div className="col-md-4 mb-4 d-flex justify-content-center">
      <Card style={{ width: '18rem' }} className="shadow-sm">
        <Card.Img variant="top" src={producto.image} alt={producto.title} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{producto.title}</Card.Title>          
          <h6 className="fw-bold">${producto.price}</h6>
          <Button variant="primary" onClick={() => navigate(`/producto/${producto.id}`)}>Ver más</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;



/*
<Card.Text>{producto.description}</Card.Text>

<div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <p className="fw-bold">${producto.precio}</p>
          <button className="btn btn-primary mt-auto">
            Ver más...
          </button>
        </div>
      </div>
    </div> */

