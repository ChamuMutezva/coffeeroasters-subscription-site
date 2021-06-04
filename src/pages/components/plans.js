import { useState } from 'react'
import { PlanSteps } from '../components/dataList'
const Plan = () => {
    const [show, setShow] = useState(false)
    // const {name} = PlanSteps
    console.log(PlanSteps)
    const handleShow = () => {
        setShow(!show)
        console.log(show)
    }

    return (
        <section className="plan__section" >
            <aside className="plan__nav">
                <ul className="plan__nav__list">
                    <li className="plan__nav__item">
                        <a href="#">
                            <span>01</span>
                            <span>Preferences</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#">
                            <span>02</span>
                            <span>Bean Type</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#">
                            <span>03</span>
                            <span>Quantity</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#">
                            <span>04</span>
                            <span>Grind Option</span>
                        </a>
                    </li>
                    <li className="plan__nav__item">
                        <a href="#">
                            <span>05</span>
                            <span>Deliveries</span>
                        </a>
                    </li>
                </ul>
            </aside>
            <ul className="accordion">
                {PlanSteps.map(plan => {
                    return <li key={plan.id}>
                        <div className="accordion__item">
                            <h3 className="accordion__header">
                                <button aria-expanded="true" className={`accordion--btn ${show ? "collapsed" : ""}`} onClick={handleShow} data-toggle="collapse"
                                    data-target={`collapse${plan.id}`} >{plan.question}</button>
                            </h3>
                            <div id={`collapse${plan.id}`} className={`plan__card ${show ? "collapse" : ""}`}>
                                {plan.options.map(opt => {
                                    return <div className={`plan__select ${plan.name}`} key={opt.id}>
                                        <input type="radio" name={plan.name} id={opt.sub} />
                                        <label className="radio__label" htmlFor={opt.sub}>
                                            <span className={`plan__card__title radio__big__text wrapper__${plan.name}`}>{opt.type}</span>
                                            <span className={`plan__card__content radio__small__text ${opt.sub}`}>{opt.answer}</span>
                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>

                    </li>

                })}
            </ul>
        </section>
    )
}
export default Plan
