// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './Components/Header'
import User from './Components/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Header' element={<Header/>}/>
      </Routes>
      <Link to='/Header'>
        <button>Home</button>
      </Link>
    </BrowserRouter>
  );
}

export default App;
