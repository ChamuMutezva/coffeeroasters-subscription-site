import { Link } from 'react-router-dom'
//import { useState } from 'react'


const NavListItem = (props) => {
/*
    const [ShowMenu, setShowMenu] = useState(true)

    const hamburgerClick = () => {

        setShowMenu(!ShowMenu)

        const modal = document.querySelector(".modal")
        const hamburger = document.querySelector(".hamburger")
        const close__menu = document.querySelector(".close__menu")     
       
       
       console.log(ShowMenu)  
       
       if (ShowMenu) {
           modal.classList.toggle("modal__open")
          close__menu.classList.toggle("toggle__btn__close")
          close__menu.classList.toggle("toggle__btn__open")
          
          hamburger.classList.toggle("toggle__btn__close")
          hamburger.classList.toggle("toggle__btn__open")
         
       } 
        console.log(props)

    }
*/
    return (
        <li className="nav__item">
            <Link to={props.link} className="anchor nav__item--btn">{props.name}</Link>
        </li>
    )
}
export default NavListItem