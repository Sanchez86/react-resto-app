import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart, onAddTheSame, onKillTheSame} from "../../actions";

const CartTable = ({items, deleteFromCart, onAddTheSame, onKillTheSame}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, quantity} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt="Cesar salad" />
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">
                                    <button onClick={() => onKillTheSame(id)} className="cart__item-symbol">-</button>
                                    {price}$ * {quantity} = {price*quantity}$
                                    <button onClick={() => onAddTheSame(id)} className="cart__item-symbol">+</button>
                                </div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart,
    onAddTheSame,
    onKillTheSame
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);