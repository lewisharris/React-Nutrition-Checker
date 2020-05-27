import React from 'react';
import './LoaderStyle.scss';

const Loader = () => {
    return(
        <div className="loader">
            <div className="circle-one"></div>
            <div className="circle-two"></div>
            <div className="circle-three"></div>
        </div>
    )
}

export default Loader;