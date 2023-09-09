import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const navigate = useNavigate();
    const { id: userId } = useParams();

    return (
        <>
            <div className="mb-2">
                <i>Details about user {userId}</i>
            </div>

            <button
                onClick={() => navigate(-1)}
                className="btn btn-primary btn-sm"
            >
                Go Back
            </button>
        </>
    );
};

export default UserDetails;
