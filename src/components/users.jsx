import { Link, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [params, setParams] = useSearchParams();

    const allUsers = (
        <>
            <div className="m-2">
                <Link to="1">
                    <i>user1</i>
                </Link>
            </div>

            <div className="m-2">
                <Link to="2">
                    <i>user2</i>
                </Link>
            </div>

            <div className="m-2">
                <Link to="3">
                    <i>user3</i>
                </Link>
            </div>
        </>
    );

    const users =
        params.get('filter') === 'active' ? (
            <div className="m-2">
                <i>Showing active users</i>
            </div>
        ) : (
            allUsers
        );

    return (
        <>
            <h1>List of users</h1>

            <button
                onClick={() => setParams({ filter: 'active' })}
                className="btn btn-primary btn-sm m-2"
            >
                Active Users
            </button>
            <button
                onClick={() => setParams({})}
                className="btn btn-primary btn-sm"
            >
                Reset Filters
            </button>

            {users}
        </>
    );
};

export default Users;
