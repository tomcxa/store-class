import React, { Component } from 'react'

import ItemInfo from './ItemInfo';
import PurchaseInfo from './PurchaseInfo';

export default class ShopItemFunc extends Component {

    render() {
        const { item } = this.props;
        return (
            <div className="main-content">
                <ItemInfo item={item} />
                <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                <div className="divider"></div>
                <PurchaseInfo item={item} />
            </div>
        )
    }
}
