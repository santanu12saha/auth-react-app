import React, { useState } from 'react';
import AuthForm from './authForm';
import { useMutation } from '@apollo/client';
import LOGIN from '../../mutations/login';
import GET_CURRENT_USER from '../../queries/CurrentUser';

const LoginForm =  (props) => {
    const [errors, setErrors] = useState([]);
    const [login] = useMutation(LOGIN);
    const onSubmit = (email, password) => {
        login({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query: GET_CURRENT_USER}]
        }).catch(res => {
            setErrors(res.graphQLErrors.map(error => error.message));
        });
    };

    return (
        <div>
            <h4>Login</h4>
            <AuthForm errors={errors} onSubmit={onSubmit}/>
        </div>
    )
};

export default LoginForm;