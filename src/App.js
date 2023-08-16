import './sass/App.scss';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
import Shop from './Components/Shop.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <div>
      < NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      < Footer />
    </div>
  );
}

export default App;
