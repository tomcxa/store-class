import React, {Fragment} from 'react'

const ItemInfo = ({ item }) => {
    return (
        <Fragment>
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">
                {item.descriptionFull}
            </div>
        </Fragment>
    )
}

export default ItemInfo

