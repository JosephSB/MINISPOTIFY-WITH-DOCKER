import {useState} from 'react';

const BarResponsive = ({aside}) =>{
    const [icon, setIcon] = useState(true);

    const handleClick = () =>{
        aside.current.classList.toggle('AsideResponsive')
        setIcon(!icon)
    }
    return (
        <div className='BarraResponsive' onClick={handleClick}>
            <i className={`fas ${icon ? 'fa-bars' : 'fa-times'} fa-2x`}></i>
        </div>
    )
}

export default BarResponsive