import React, { useEffect, useState } from 'react'

import ItemList from '../ItemList';
import ItemCount from '../ItemCount';
import Title from '../Title';


const lugar = [
    { id: 1, image: "https://fedenh3.github.io/pruebaJSfinal/images/foro.jpg", title: "italia"},
    { id: 2, image: "https://fedenh3.github.io/pruebaJSfinal/images/austria_steyr.jpg", title: "austria"},
    { id: 3, image: "https://fedenh3.github.io/pruebaJSfinal/images/berlin.jpg", title: "alemania"},
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(lugar);
            }, 3000);
        });
        getData.then(res => setData(res));
    
    }, [])


    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return ( 
        <>
            <Title greeting={texto} />
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
     );
}
 
export default ItemListContainer;

