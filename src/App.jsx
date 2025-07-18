import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categories/:categoryName" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Routes>  
    </ BrowserRouter>
  );
}

export default App;

