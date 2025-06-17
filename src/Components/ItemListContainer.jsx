import { useEffect, useState } from 'react';
import ItemList from './ItemList';



  
function ItemListContainer() { 
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);


return (
  <ItemList items={items} />
)
}

export default ItemListContainer;
