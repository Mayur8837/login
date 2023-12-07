
import {useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,
Route,
Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

function App(props) {
  const [darkmode,setDarkmode] = useState('light');

  const toggle = ()=>{
    if(darkmode === 'light'){
      setDarkmode('dark')
    }else{
      setDarkmode('light')
    }
  }
  return (
    <div>
      <Router>
        <Navbar mode={darkmode} toggleMode={toggle}/>
        <Routes>
        <Route path='/' Component={Home}/>
        </Routes>
        <Routes>
        <Route path='/about' Component={About}/>
        </Routes>
        <Routes>
        <Route path='/login' Component={Login}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
