//import { useState } from 'react'
import NavListItem from './navListItem'
const NavList = ({ click }) => {

    return (
        <ul className={`nav__list`} role="menubar" aria-label="main menu">
            <NavListItem name="Home" link="/" click={click} />
            <NavListItem name="About us" link="/about" click={click} />
            <NavListItem name="Create your plan" link="/subscribe" click={click} />
        </ul>
    )
}

export default NavList