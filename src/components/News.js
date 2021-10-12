import React, { Component } from 'react'
import New from "./New";
import {useFetchNews} from "../hooks/useFetchNews";

const News = ({categoria}) => {

    const {data, loading} = useFetchNews(categoria);

    return (
        !loading ? 
        <div className="row">
            {data.map(n=>{
                return (<New key={n.url} new={n} />);
            })}
        </div> : <h2>Cargando...</h2>
    )
}

export default News;
