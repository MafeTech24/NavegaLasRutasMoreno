import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(err => console.error('Error al cargar producto:', err));
  }, [id]);  

  return (
    <div className="container mt-4">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ maxWidth: '200px' }} />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
    </div>
  );
}

export default ItemDetailContainer;