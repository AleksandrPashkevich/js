import React from 'react';
import './errorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
    return (
    <>
    <img src={img} alt='Error'></img>
    <span><h1>Something goes wrong....</h1></span>

    </>
    )
}

export default ErrorMessage;