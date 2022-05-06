// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './Components/Header'
// import User from './Components/User'
import Login from './Components/Login'
import ProductList from './Components/ProductList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
      </Routes>
      <Link to='/Header'>
        <button>Home</button>
      </Link>
    </BrowserRouter>
  );
}

export default App;
