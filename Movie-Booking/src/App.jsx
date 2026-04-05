import './App.css';
import Nav from './Nav.jsx'
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./home";
import Login from "./login";
import Browse from "./browse";
import Bookings from "./bookings";
import Snacks from "./snacks";

export default function Movie() {
 const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="layout">
      <Nav collapsed={collapsed} setCollapsed={setCollapsed}/>

        <div className={`content ${collapsed ? 'collapsed' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/snacks" element={<Snacks />} />
          </Routes>
        </div>
    </div>

  );
}


