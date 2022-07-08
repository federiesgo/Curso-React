import './Styles/style.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a EmparSpa"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenido a EmparSpa"} />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
