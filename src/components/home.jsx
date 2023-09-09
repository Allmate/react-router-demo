import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Home</h1>
            <button
                onClick={() => navigate('order-summary')}
                className="btn btn-primary btn-sm"
            >
                Place Order
            </button>
        </>
    );
};

export default Home;
