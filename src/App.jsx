import './App.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title={"¡Bienvenido a SuperMarketApp!"} />
    </>
  );
}

export default App;
