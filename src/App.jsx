import './Styles/style.scss';
import {Navbar} from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Containers/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a EmparSpa"}/>
      <div className='centrado-cartas'>               
      </div>              
    </div>
  );
}

export default App;
