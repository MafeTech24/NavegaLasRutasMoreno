import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';



  
function ItemListContainer() { 

  const [items, setItems] = useState([])
  const { categoryName } = useParams();
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching products:', err));
    
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, [categoryName]);   


return (
  <ItemList items={items} />
)
}

export default ItemListContainer;
