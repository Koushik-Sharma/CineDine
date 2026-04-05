import './App.css';
import Nav from './Nav.jsx'
import {useState} from 'react';

export default function Movie() {
 const [collapsed, setCollapsed] = useState(false);
 
  return (
    <div className="layout">
      <Nav collapsed={collapsed} setCollapsed={setCollapsed}/>
        <div className={`content ${collapsed ? 'collapsed' : ''}`}>
          <h1>Hello, Koushik! Welcome to the Movie Booking App we wish you a nice day.</h1>
        </div>
    </div>

  );
}


