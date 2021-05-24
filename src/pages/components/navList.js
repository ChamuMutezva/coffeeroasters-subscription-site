import NavListItem from './navListItem'
const NavList = () => {
    return (
        <ul className={`nav__list`}>
            <NavListItem name="Home" link="/" />
            <NavListItem name="About us" link="/about"/>
            <NavListItem name="Create your plan" link="/subscribe" />
        </ul>
    )
}

export default NavList