import React from 'react';
import "./Section.css";

function Section({title,children}) {
    return (
        <div className="section">
            <div className="section_title">{title}</div>
            {children}
        </div>
    )
}

export default Section
