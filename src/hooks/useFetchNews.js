import { useEffect, useState } from "react";
import { getNews } from "../helpers/getNews";


export const useFetchNews = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    
    useEffect(() =>{
        getNews( category ).then( n => {

            setState({
                data: n.articles,
                loading: false 
            })

        });
    },[ category ])
    
    
    return state;
}
