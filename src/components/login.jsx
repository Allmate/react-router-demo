import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Login = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();
    const redirectPath = location.state?.path || '/';

    const [user, setUser] = useState(null);

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath);
    };

    if (auth.user) return <Navigate to="/" />;

    return (
        <>
            <h1 className="mb-2">Login</h1>
            <input
                placeholder="Enter username"
                className="form-control w-25 mb-2"
                onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={handleLogin} className="btn btn-primary btn-sm">
                Login
            </button>
        </>
    );
};

export default Login;
