import React from 'react';
import {Link} from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category, id} = menuItem;

    let icon;

    switch (category) {
        case 'meat':
            icon=1;
            break;
        case 'salads':
            icon=2;
            break;
        case 'pizza':
            icon=3;
            break;
    }

    return (

            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title} />
                <div className="menu__category">Category: № {icon} <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <div className="menu__footer">
                    <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
                    <Link to={`/${id}`} className="menu__btn menu__view">View</Link>
                </div>
            </li>
    )
};

export default MenuListItem;