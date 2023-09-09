import { NavLink, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <input placeholder="Search Products" className="m-2" />

            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="featured" className="nav-link">
                        Featured
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="new" className="nav-link">
                        New
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Products;
