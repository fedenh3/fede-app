import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList';
import Title from '../Title';
import { useParams } from 'react-router-dom';



export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if( categoriaId ) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() }))))
            
        }    
    }, [categoriaId])
   

    return ( 
        <>
            <Title greeting={texto} />
            <ItemList data={data} />
        </>
     );
}
 
export default ItemListContainer;