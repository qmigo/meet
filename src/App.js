// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Header from './myComponent/Header';
import Button from './myComponent/Button';
import Video from './myComponent/Video';
function App() {
  const [path, setPath] = useState("https://www.google.com")

  const [login_id, setLogin_id] = useState("Ankur Mishra")
  return (
    <div className="app">
      <Header login_id={login_id}/>
      <Video />
      <div className="button_holder">
      <Button title="Join Meet" url={path}/>
      <Button title="Create Meet" url={path}/>
      </div>
    </div>
  );
}

export default App;
