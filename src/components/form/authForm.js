import React, { useState } from 'react';

const AuthForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(email, password);
    }

    return (
        <div className="row">
            <form onSubmit={onSubmit} className="col s6">
                <div className="input-field">
                    <input
                        id="email"
                        className="validate"
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email} 
                        placeholder="Email"/>
                </div>
                <div className="input-field"> 
                    <input
                        id="password"
                        className="validate"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        value={password} 
                        placeholder="Password"/>
                </div>
                <div className="errors">
                    {props.errors.map(error => <div key={error}>{error}</div>)}
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default AuthForm;