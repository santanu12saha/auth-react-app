import React, { useState } from 'react';

const AuthForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="row">
            <form className="col s6">
                <div className="input-field">
                    <label>Email</label>
                    <input
                        id="email"
                        className="validate"
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email} />
                </div>
                <div className="input-field"> 
                    <label>Password</label>
                    <input
                        id="password"
                        className="validate"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        value={password} />
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default AuthForm;