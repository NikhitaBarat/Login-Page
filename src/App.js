import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Profile from './Profile'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar  from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
    <Route exact path = "/" element = {<Login/>}/>
        <Route exact path = "/Profile" element={<Profile />} />
    </Routes>
    </div>
  );
}

export default App;
