import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import GET_CURRENT_USER from '../../queries/CurrentUser';
import LOG_OUT from '../../mutations/logout';

const Header = () => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);
    const [logout] = useMutation(LOG_OUT);

    const onLogoutHandler = (event) => {
        event.preventDefault();
        logout({
            refetchQueries: [{ query: GET_CURRENT_USER }] 
        });
    };

    let renderButtons = null;

    if (loading) { return <div />; }
    if (error) { return <div />; }

    if (data.user) {
        renderButtons = (
            <li><a href="!#" onClick={onLogoutHandler}>Logout</a></li>
        );
    } else {
        renderButtons = (
            <div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </div>
        );
    }


    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                <ul className="right">
                    {renderButtons}
                </ul>
            </div>
        </nav>
    )
};

export default Header;