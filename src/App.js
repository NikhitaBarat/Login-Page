import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Profile from './Profile'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar  from './NavBar';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
    <Route exact path = "/" component = {Login}/>
    <Route exact path = "/Profile" component = {Profile} />
    </Routes>
    </div>
  );
}

export default App;
