import React from 'react';
import "./Container.css"
function Container({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

export default Container;