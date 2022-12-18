import { NavLink } from 'react-router-dom';

const ItemLink = ({name,route,icon}) =>{
    return (
        <li className="Aside_Link">
            <NavLink 
            className="Link"
            exact="true" to={route}
            activeclassname="active"
            >
                <i className={`fas ${icon} icon`}></i>
                {name}
            </NavLink>
        </li>
    )
}

export default ItemLink