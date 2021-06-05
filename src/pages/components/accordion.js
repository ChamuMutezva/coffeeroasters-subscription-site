import { useState } from 'react'
import { PlanSteps } from '../components/dataList'
const Accordion = () => {
    const initialState = {
        preference: false,
        bean: false,
        qty: false,
        grind: false,
        deliver: false
    }

    const [show, setShow] = useState(false)
    const [radioData, setRadioData] = useState(initialState)
    // const {name} = PlanSteps
    // console.log(PlanSteps)
    // ${show ? "collapse" : ""}
    // ${show ? "collapsed" : ""} button 
    const handleShow = (evt) => {
        setShow(!show)

        const btn = evt.target
        const parent = btn.parentElement
        const attribute = btn.getAttribute('data-target')
        console.log(attribute)
        const targetDiv = parent.nextSibling
        // console.log(targetDiv)
        btn.classList.toggle("collapsed")
        // targetDiv.classList.toggle("collapse")
        targetDiv.classList.toggle(attribute)
        targetDiv.classList.toggle("collapse__show")
    }

    const onChange = (evt) => {
        console.log(evt.target)
        const { name, checked } = evt.target
        setRadioData({ ...radioData, [name]: checked })
        console.log(name)
        console.log(checked)
    }
    return (
        <ul className="accordion">
            {PlanSteps.map(plan => {
                return <li className="accordion__list__item" key={plan.id}>
                    <div id={plan.name} className="accordion__item">
                        <h3 className="accordion__header">
                            <button aria-expanded="true" className={`accordion--btn`} onClick={handleShow} data-toggle="collapse"
                                data-target={`collapse${plan.id}`} >{plan.question}</button>
                        </h3>
                        <div id={`collapse${plan.id}`} className={`plan__card`}>
                            {plan.options.map(opt => {
                                return <div className={`plan__select ${plan.name}`} key={opt.id}>
                                    <input type="radio" name={plan.name} id={opt.sub} onChange={onChange} />
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
    )
}
export default Accordion