import { useState } from 'react'
import { PlanSteps } from '../components/dataList'
const Plan = () => {
    const [show, setShow] = useState(false)
    // const {name} = PlanSteps
    // console.log(PlanSteps)
    const handleShow = () => {
        setShow(!show)
        console.log(show)
    }

    return (
        <section className="plan__section" >
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
                                        <h3 className={`plan__card__title wrapper__${plan.name}`}>
                                            {opt.type}
                                        </h3>
                                        <p id={`${opt.sub}`} className={`plan__card__content ${opt.sub}`}>{opt.answer}</p>
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