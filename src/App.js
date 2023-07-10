import './App.css';
import Footer from './Components/Footer';
import { HeaderBody } from './Components/HeaderBody';
import { ProductBody } from './Components/ProductBody';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <HeaderBody />
    <ProductBody />
    <Footer />
    </>
  );
}

export default App;
