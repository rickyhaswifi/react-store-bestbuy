import React from 'react';
import Item from './Item'

const List = ({ name, items, price, image, itemClick, update, remove }) => (

    <div>
        <h2>{name}</h2>
        <ul>
            { items.map ( item => <Item key={item.id} {...item} itemClick={itemClick} remove={remove} update={update}/> )}
            {/* { items.price.map => items.price == items.price.sum} */}
        </ul>
    </div>
)

export default List;

