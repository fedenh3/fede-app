import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';

const lugar = { id: 1, image: "https://fedenh3.github.io/pruebaJSfinal/images/berlin.jpg", title: "Alemania" };


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(lugar);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])
    
    return ( 
        <ItemDetail data={data} />
     );
}

export default ItemDetailContainer;
