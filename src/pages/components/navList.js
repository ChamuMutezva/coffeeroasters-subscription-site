import NavListItem from './navListItem'
const NavList = () => {
    return (
        <ul className={`nav__list`}>
            <NavListItem name="Home" />
            <NavListItem name="About us" />
            <NavListItem name="Create your plan" />
        </ul>
    )
}

export default NavList