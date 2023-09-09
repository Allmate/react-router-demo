import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };

    return (
        <>
            <h1>Welcome {auth.user}</h1>
            <button onClick={handleLogout} className="btn btn-primary btn-sm">
                Logout
            </button>
        </>
    );
};

export default Profile;
