import { Link } from 'react-router-dom'
//import { useRef } from 'react'


const NavListItem = (props) => {

    return (
        <li className="nav__item">
            <Link to={props.link}
                role="menuitem"
                className="anchor nav__item--btn">{props.name}
            </Link>
        </li>
    )
}
export default NavListItem