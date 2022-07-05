import './Styles/style.scss';
import {Navbar} from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a EmparSpa"}/>
      <ItemDetailContainer />             
    </div>
  );
}

export default App;
