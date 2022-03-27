// import logo from './logo.svg';
import './App.css';
import Haui from './Haui';

function App() {
  const string = 'ABC XYZ 123'
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Haui text={string} />
    </div>
  );
}

export default App;
