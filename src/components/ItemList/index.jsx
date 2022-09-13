import Item from '../Item';
import React from 'react';

const ItemList = ({data = [] }) => {
    return (
        data.map(lugar => <Item key={lugar.id} info={lugar} />
    ));
}

export default ItemList;
