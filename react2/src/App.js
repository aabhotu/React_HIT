import {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Header'
import Heading from './Heading'

function App() {
  const [color, setColor] = useState ('blue');
  const string = 'hello Thao';

  const [post, setPost] = useState(null)

  useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(json => setPost(json))
  }, []);

    console.log(post);
  return (
    <div className="App">
      {
        console.log('render 222')
      }
      <header className="App-header">
        {/* <Header /> */}
        <Heading title = {string} color ={color} setColor={setColor} />
        {
          post && (
            post.map((item, index) => {
              return (
              <p key={index}>{item.title}</p>
              )
            })
          )
        }
      </header>
    </div>
  );
}

export default App;
