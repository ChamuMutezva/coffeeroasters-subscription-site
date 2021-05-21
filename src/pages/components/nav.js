import Logo from '../../assets/shared/desktop/logo.svg'
import Hamburger from '../../assets/shared/mobile/icon-hamburger.svg'
import Close from '../../assets/shared/mobile/icon-close.svg'
import NavList from './navList'
const Navigation = () => {
    const hamburgerClick = () => {
        console.log("hamburger clicked")
    }
    return(
       <nav>
            <div className="logo__wrapper">
                <a href="/" className="logo--link" >
                    <img src={Logo} alt="well come to coffee roasters" />
                </a>
            </div>
            <div className="modal">
                <NavList />
            </div>
            <div className="menu__control">
                <button className={`hamburger`} onClick={hamburgerClick}>
                    <img src={Hamburger} alt="open the menu" />
                </button>
                <button className={`close__menu`} onClick={hamburgerClick}>
                    <img src={Close} alt="close the menu" />
                </button>
            </div>
       </nav>
    )
}
export default Navigation
