import React from 'react';
import "./Container.css"

// provides a 'wrapper' (css container) for underlying components
function Container({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

export default Container;