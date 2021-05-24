import { Link } from 'react-router-dom'
const Hero = (props) => {
    return (
        <div className="hero__content">
            <h1 className="hero__title">{props.title}</h1>
            <p className="hero__summary">{props.content}</p>
            {/*<a href="/" className="anchor nav__item--btn hero--btn">Create your plan</a> */}
            {props.button && <Link to="/subscribe" className={`anchor nav__item--btn hero--btn`}>{props.button}</Link>}
        </div>
    )
}
export default Hero