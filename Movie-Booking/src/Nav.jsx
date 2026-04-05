import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav({collapsed, setCollapsed,}) {

    return(

        <div className={`nav ${collapsed ? 'collapsed' : ''}`}>
            <button className="nav-toggle" onClick = {() =>setCollapsed(!collapsed)} ><img src = "nav-bar-icons/toggle-for-nav.png" /></button>
            <ul className="nav-list">
                
                <li><NavLink to ="/login" className = {({isActive}) => isActive ? "active" : ""}><img src="nav-bar-icons/login.png" />{!collapsed && "Login"}</NavLink></li>
                <li><NavLink to ="/home" className = {({isActive}) => isActive ? "active" : ""} ><img src="nav-bar-icons/home.png" />{!collapsed && "Home"}</NavLink></li>
                <li><NavLink to ="/browse" className = {({isActive}) => isActive ? "active" : ""} ><img src="nav-bar-icons/browse.png" />{!collapsed && "Browse"}</NavLink></li>
                <li><NavLink to ="/bookings" className = {({isActive}) => isActive ? "active" : ""} ><img src="nav-bar-icons/bookings.png" />{!collapsed && "Bookings"}</NavLink></li>
                <li><NavLink to ="/snacks" className = {({isActive}) => isActive ? "active" : ""} ><img src="nav-bar-icons/snacks.png" />{!collapsed && "Snacks"}</NavLink></li>
            </ul>
         
        </div>
    );

}