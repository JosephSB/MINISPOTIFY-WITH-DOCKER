import React from 'react'

const Loader = ({ message }) =>{
    return(
        <div className="Loader">
            <div className="preloader"></div>
            <p className="mesage-loader">{message}</p>
        </div>
    )
}

export default Loader