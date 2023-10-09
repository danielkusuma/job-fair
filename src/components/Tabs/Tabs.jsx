import React from 'react';
import './Tab.css';

function Tab(props) {
    const {label, isActive, onClick } = props;
    const tabClass = isActive ? 'tab active' : 'tab';

    return (
        <button className = {tabClass} onClick = {onClick}>
            {label}
        </button>
    );
}

export default Tab;
