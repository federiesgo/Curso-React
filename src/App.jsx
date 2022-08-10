import './Styles/style.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import CartCustomProvider from './CartContext/CartContext';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartCustomProvider >
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido a EmparGaming"} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenido a EmparGaming"} />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>        
      </CartCustomProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
