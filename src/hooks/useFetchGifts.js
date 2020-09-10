import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

//CUSTOM HOOK PARA OBTENER LA DATA Y CONTROLAR EL ESTATO DE MI COMPONENTE
export const useFetchGifts = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                // setTimeout(() => {
                //     console.log(imgs)
                    setstate({
                        data: imgs,
                        loading: false
                    })
                // }, 3000)
            });
    }, [category])


    return state;
}
