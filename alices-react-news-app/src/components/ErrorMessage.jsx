import React from 'react';

const ErrorMessage = (props) => {
    return (
        <div className="error-message">
            <h2>{props.errorMessage}</h2>
        </div>
    );
};

export default ErrorMessage;