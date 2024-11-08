import './css/App.css';
import NavPanel from './navPanel';
import Intro from './Intro';
import ProductList from './ProductList';
import New from './New';

function App() {
  return (
    <div className="App">
         <NavPanel/>
         <Intro />
         <ProductList />
         <New />
    </div>
  );
}

export default App;
