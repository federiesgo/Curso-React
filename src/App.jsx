import './Styles/style.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a EmparSpa"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenido a EmparSpa"} />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='/Cart' element={<Cart />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
