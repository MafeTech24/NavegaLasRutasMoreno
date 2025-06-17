import './App.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categories/:categoryName" element={<ItemListContainer />} />
      </Routes>  
    </ BrowserRouter>
  );
}

export default App;

/*
import './App.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryName" element={<ItemListContainer />} />
      </Routes>  
    </ BrowserRouter>
  );
}

export default App;
*/
