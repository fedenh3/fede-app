import React, { useEffect, useState } from 'react';


import ItemList from '../ItemList';
import Title from '../Title';

import { useParams } from 'react-router-dom';

const caramelos = [
    { id: 1, image: "http://d2r9epyceweg5n.cloudfront.net/stores/001/647/551/products/991649bc-295d-443b-8a57-d370b9ac0c7f-8a54a0dc272d5d7b5116505738842228-640-0.png", category: 'caramelos', title: "Cremino" },
    { id: 2, image: "http://d2r9epyceweg5n.cloudfront.net/stores/001/647/551/products/d9db0323-9ac4-49cb-bd41-f8556a20faf5-544fef181fc9a84dc316505750583838-640-0.png", category: "caramelos", title: "Sugus" },
    { id: 3, image: "http://d2r9epyceweg5n.cloudfront.net/stores/001/647/551/products/11b4cad6-caf7-4b51-93a0-ab6e79b3d6b5-e0cfe2bb294f39929516505749995612-640-0.png", category: 'caramelos', title: "Palitos" },
    { id: 4, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/647/551/products/27931425-9d2c-4a6e-b704-d0b2a3edb731-7a3d33889afa8a2f2316505742004038-640-0.png", category: 'gomitas', title: "Cerebritos" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sJMJLkBBebViZN96ObmV9hhteAJd5cqcCZaXi78&s", category: 'gomitas', title: "Tradicionales" },
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(caramelos);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(caramelo => caramelo.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
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