import './Nav.css';
export default function Nav({collapsed, setCollapsed}) {
    return(

        <div className={`nav ${collapsed ? 'collapsed' : ''}`}>
            <button className="nav-toggle" onClick = {() =>setCollapsed(!collapsed)} ><img src = "nav-bar-icons/toggle-for-nav.png" /></button>
            <ul className="nav-list">
                
                <li><a href="#login"><img src="nav-bar-icons/login.png" />{!collapsed && "Login"}</a></li>
                <li><a href="#home"><img src="nav-bar-icons/home.png" />{!collapsed && "Home"}</a></li>
                <li><a href="#browse"><img src="nav-bar-icons/browse.png" />{!collapsed && "Browse"}</a></li>
                <li><a href="#bookings"><img src="nav-bar-icons/bookings.png" />{!collapsed && "Bookings"}</a></li>
                <li><a href="#snacks"><img src="nav-bar-icons/snacks.png" />{!collapsed && "Snacks"}</a></li>
            </ul>
         
        </div>
    );

}