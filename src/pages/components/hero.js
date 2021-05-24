const Hero = (props) => {
    return (
        <div className="hero hero__home">
            <div className="hero__content">
                <h1 className="hero__title">{props.title}</h1>
                <p className="hero__summary">{props.content}</p>
               {/*<a href="/" className="anchor nav__item--btn hero--btn">Create your plan</a> */}
                {props.button && <a className={`anchor nav__item--btn hero--btn`}>{props.button}</a>}
            </div>
        </div>
    )
}
export default Hero