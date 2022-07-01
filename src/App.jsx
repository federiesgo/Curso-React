import './Styles/style.scss';
import {Navbar} from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Containers/ItemListContainer';
import { Carta } from './Components/Card/Carta.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a EmparSpa"}/>
      <div className='centrado-cartas'>
        <Carta cantidad={15} />
        <Carta cantidad={9} /> 
        <Carta cantidad={25} /> 
      </div>              
    </div>
  );
}

export default App;
