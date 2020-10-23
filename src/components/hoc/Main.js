import React from 'react';
import Header from '../header/Header';

const Main = (props) => {
    return (
        <div className="container">
            <Header/>
            {props.children}
        </div>
    )
};

export default Main;