import React from 'react';

import { useState } from 'react';

const Categorys = ({setCategoria}) => {

    const Click = (e) =>{
        setCategoria(e.target.textContent.toLowerCase());
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={Click}>General</button>
            <button className="btn btn-primary" onClick={Click}>Technology</button>
            <button className="btn btn-primary" onClick={Click}>Business</button>
            <button className="btn btn-primary" onClick={Click}>Entertainment</button>
            <button className="btn btn-primary" onClick={Click}>Health</button>
            <button className="btn btn-primary" onClick={Click}>Science</button>
            <button className="btn btn-primary" onClick={Click}>Sports</button>
        </div>
    )
}

export default Categorys;
