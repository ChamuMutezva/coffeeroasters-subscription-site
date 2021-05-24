import { Link } from 'react-router-dom'
const NavListItem = (props) => {
    console.log(props)
    return(
        <li className="nav__item">
           <Link to={props.link} className="anchor nav__item--btn">{props.name}</Link>
        </li>
    )
}
export default NavListItem