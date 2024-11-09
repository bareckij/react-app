import './css/App.css';
import NavPanel from './navPanel';
import Intro from './Intro';
import ProductList from './ProductList';
import New from './New';
import OurTeam from './OurTeam';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
         <NavPanel/>
         <Intro />
         <ProductList />
         <New />
         <OurTeam />
         <Footer />
    </div>
  );
}

export default App;
