const AsideNavigation = () => {
    return (
        <aside aria-label="aside navigation" className="plan__nav">
            <nav>
                <ul className="plan__nav__list">
                    <li className="plan__nav__item">
                        <a  href="#preferences">
                            <span className="nav__item__num">01 </span>
                            <span className="nav__item__text">Preferences</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#bean">
                            <span className="nav__item__num">02 </span>
                            <span className="nav__item__text">Bean Type</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#quantity">
                            <span className="nav__item__num">03 </span>
                            <span className="nav__item__text">Quantity</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#grind">
                            <span className="nav__item__num">04 </span>
                            <span className="nav__item__text">Grind Option</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#deliveries">
                            <span className="nav__item__num">05 </span>
                            <span className="nav__item__text">Deliveries</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
export default AsideNavigation