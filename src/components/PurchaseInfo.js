import React from 'react';

const PurchaseInfo = ({ item }) => (
    <div className="purchase-info">
        <div className="price">{item.currency}{item.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
    </div>
);

export default PurchaseInfo;