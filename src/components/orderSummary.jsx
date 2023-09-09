import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Order Confirmed</h1>
            <button
                onClick={() => navigate(-1)}
                className="btn btn-primary btn-sm"
            >
                Go Back
            </button>
        </>
    );
};

export default OrderSummary;
