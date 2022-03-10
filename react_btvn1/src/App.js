import {useState} from 'react';
import './App.css';
import Heading from './SetColor'
import Number from './SetNumber'
import ChangeText from './ChangeText'

function App() {
  const [color, setColor] = useState ('yellow');
  const string = 'Hello Thao';

  // const [post, setPost] = useState(null)

    // console.log(post);
  return (
    <div className="App">
      <header className="App-header">
        <Heading title = {string} color ={color} setColor={setColor} />
        <Number />
        <ChangeText />
      </header>
    </div>
  );
}

export default App;
