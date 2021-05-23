const NavListItem = (props) => {
    return(
        <li className="nav__item">
           <a href="/" className="anchor nav__item--btn">{props.name}</a>
        </li>
    )
}
export default NavListItem