import React from 'react';
import './CategoryCard.css';

function CategoryCard({image, title}) {
    return (
        <div className="category-card">
            <img src={image} alt={title} className="category-image" />
            <h2 className="category-title">{title}</h2>
        </div>
    )
}

export default CategoryCard;