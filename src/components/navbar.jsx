import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const NavBar = () => {
    const navLinkStyle = ({ isActive }) => {
        if (isActive)
            return {
                textDecoration: 'underline',
            };
    };

    const auth = useAuth();

    return (
        <nav className="navbar navbar-light bg-light">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" style={navLinkStyle}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/about"
                        className="nav-link"
                        style={navLinkStyle}
                    >
                        About
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/products"
                        className="nav-link"
                        style={navLinkStyle}
                    >
                        Products
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/users"
                        className="nav-link"
                        style={navLinkStyle}
                    >
                        users
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                        profile
                    </NavLink>
                </li>

                {!auth.user && (
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">
                            login
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
